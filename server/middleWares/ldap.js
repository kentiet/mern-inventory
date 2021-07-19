import ldap from 'ldapjs'

const opts = { 
  url: 'ldap://ldap.forumsys.com',
  port: '389'
}
const ldapClient = ldap.createClient(opts)


ldapClient.bind('cn=read-only-admin,dc=example,dc=com', 'password', (err, res) => { 
  if (err) {
    console.log(err);
    client.unbind();
    return;
  }
})

const findAll = (req, res, next) => {
  let entries = []
  const searchOpts = {
    filter: '(objectClass=*)',
    scope: 'sub',
    attributes: ['dn', 'cn', 'displayName', 'mail', 'sAMAccountName']
  }
  
  ldapClient.search('dc=example,dc=com', searchOpts, function (err, result) { 
     result.on('searchEntry', (entry) => {
      // console.log('entry: ' + JSON.stringify(entry.object));
      entries.push(entry.object)
    });

     result.on('error', function(err) {
       ldapClient.unbind();
        return err
    });

    result.on('end', function(response) {
      if(response.status != 0) res.status(404).send("User not found");
      next(res.json(entries))
    });
  })
}

export { findAll }
