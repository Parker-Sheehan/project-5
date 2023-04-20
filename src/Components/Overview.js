import React from 'react'
import {useSelector} from 'react-redux'
import { selectDisplay } from '../store/slices/displayCountrySlice';

const Overview = (props) => {
  let currentCountry = useSelector(selectDisplay);


  return (
    <div>
      <table className="overview-table">
                <tr>
                    <td>Official Name: {currentCountry.name.official}</td>
                </tr>
                <tr>
                    <td>Flag: {currentCountry.flag}</td>
                </tr>
                <tr>
                    <td>Subregion: {currentCountry.subregion}</td>
                </tr>
                <tr>
                    <td>Capital: {currentCountry.capital[0]} </td>
                </tr>
                <tr>
                    <td>Side of Road: {currentCountry.car.side}</td>
                </tr>
            </table>
    </div>
  )
}

export default Overview