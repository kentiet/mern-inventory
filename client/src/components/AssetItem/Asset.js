import React from 'react'

const Asset = ({ name, description, assetNumber, price, custodian, vendor, direction}) => (
  <>
        <tr className="text-gray-700">
            <td className="border-b-2 p-4 dark:border-dark-5">
                1
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                { name }
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                { description }
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                { assetNumber }
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                { price }
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                { custodian }
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                { vendor }
            </td>
            <td className="border-b-2 p-4 dark:border-dark-5">
                { direction }
            </td>
        </tr>
  </>
)

export default Asset