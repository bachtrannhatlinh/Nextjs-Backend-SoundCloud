import React, { useEffect, useState } from 'react'
import type { TableProps } from 'antd';

import '~/styles/users.css'

interface IUsers {
  name: string
  company: string
  country: string
  avatar: string
}

const UsersTable = () => {
  const [listUsers, setListUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://662a005067df268010a23b15.mockapi.io/api/v1/users')

      const data = await res.json()
      console.log(data, 'data')
      setListUsers(data)
    }

    getData()
  }, [])

  return (
    <div>
      <h2>HTML Table</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Country</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {listUsers?.map((item: IUsers, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>{item.country}</td>
                <td>
                  <img src={item.avatar} alt={item.name} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
