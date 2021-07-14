import React, { useState, useEffect } from 'react'
import { Table, Button, Icon, Container } from 'semantic-ui-react'
import Asset from '../AssetItem/Asset'
import { Link } from 'react-router-dom'

const AssetList = () => {
    const [assetList, setAssetList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/v1/assets')
            .then(res => {
                return res.json()
            }).then(data => {
                setAssetList(data)
            })
    }, [])

    const deleteAsset = (id) => {
        setAssetList(assetList.filter(asset => asset._id !== id))

        fetch('http://localhost:3001/api/v1/assets/' + id, {
            method: 'DELETE'
        })
            .then((data) => {
                console.log(`Delete the asset with id ${id}`);
                console.log(data)
            })
            .catch(err => console.error(err))
    }


    return (
        <Container>
            <h3 style={{ textAlign: 'center'}}><Icon name='tag' />Asset List</h3>
            <Button basic color='teal' animated>
                <Link to="/assets/create" style={{ color: '#00b5ad'}}><Button.Content visible>Create</Button.Content></Link>
                <Button.Content hidden>
                    <Icon name='arrow right' />
                </Button.Content>
            </Button>
            <Table basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Asset Number</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Custodian</Table.HeaderCell>
                        <Table.HeaderCell>Vendor</Table.HeaderCell>
                        <Table.HeaderCell>In/Out?</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {assetList.map((asset, i) => {
                        return <Asset
                            key={i}
                            id={asset._id}
                            name={asset.name}
                            description={asset.description}
                            assetNumber={asset.assetNumber}
                            price={asset.price}
                            vendor={asset.vendor}
                            direction={asset.direction}
                            custodian={asset.custodian}
                            deleteAsset={deleteAsset}
                        />
                    })}
                </Table.Body>
            </Table>
        </Container>
    )
}

export default AssetList