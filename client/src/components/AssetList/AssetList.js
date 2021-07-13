import React from 'react'
import Asset from '../AssetItem/Asset'

const AssetList = ({ assets }) => (
    <div>
        <table className="table p-4 bg-white shadow rounded-lg">
            <thead>
                <tr>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        #
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Name
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Description
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Asset Number
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Price
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Custodian
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Vendor
                    </th>
                    <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        In/Out?
                    </th>
                </tr>
            </thead>

            <tbody>
                {assets.map((asset, i) => {
                    return <Asset
                        key={i}
                        name={asset.name}
                        description={asset.description}
                        assetNumber={asset.assetNumber}
                        price={asset.price}
                        vendor={asset.vendor}
                        direction={asset.direction}
                        custodian={asset.custodian}
                    />

                })}
            </tbody>
        </table>
    </div>
)

export default AssetList