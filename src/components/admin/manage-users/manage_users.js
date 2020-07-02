import React from 'react'
import './manageUser.css'
import Button from './Buttons/button'

export default function Manage_users() {
    return (
        <div>
<table id="customers">
  <tbody>
  <tr>
    <th>Name</th>
    <th>Role</th>
    <th>Manage Role</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Customer</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Customer</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Service</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Customer</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Service</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Customer</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Service</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Customer</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Service</td>
    <td><Button></Button></td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Service</td>
    <td><Button></Button></td>
  </tr>
  </tbody>
</table>
        </div>
    )
}
