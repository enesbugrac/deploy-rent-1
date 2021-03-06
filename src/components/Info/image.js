import React from 'react'

export default function search({color}) {
    return (
        <div>
         <svg className={`${color?"active":"notactive"}`}  id="photo" xmlns="http://www.w3.org/2000/svg" width="32.408" height="30.38" viewBox="0 0 32.408 30.38">
  <path id="Path_56401" data-name="Path 56401" d="M28.744,9.35H3.665A3.669,3.669,0,0,0,0,13.017V36.066A3.667,3.667,0,0,0,3.665,39.73H28.744a3.666,3.666,0,0,0,3.664-3.663V13.017A3.667,3.667,0,0,0,28.744,9.35ZM20.957,14.8a3.54,3.54,0,1,1-3.54,3.54A3.541,3.541,0,0,1,20.957,14.8Zm6.638,21.537H5.32a1,1,0,0,1-.972-1.58l6.076-12.034a1.023,1.023,0,0,1,1.873-.174l6.11,7.984a1.5,1.5,0,0,0,2.32.147l1.495-1.513a1.423,1.423,0,0,1,2.259.191l3.87,5.528C28.91,35.692,28.573,36.341,27.595,36.341Z" transform="translate(0 -9.35)" className={`${color?"active":"notactive"}`}/>
</svg>

        </div>
    )
}
