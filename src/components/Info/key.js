import React from 'react'

export default function search({color}) {
    return (
        <div>
     <svg className={`${color?"active":"notactive"}`}   id="keyword" xmlns="http://www.w3.org/2000/svg" width="28.406" height="28.406" viewBox="0 0 28.406 28.406">
  <path id="Path_56398" data-name="Path 56398" d="M22.085,19.422a9.469,9.469,0,1,1,0-10.439,5.794,5.794,0,0,1,2.77-.7,5.89,5.89,0,0,1,2.5.556,14.2,14.2,0,1,0,0,10.723,5.89,5.89,0,0,1-2.5.556A5.794,5.794,0,0,1,22.085,19.422Z" transform="translate(0)"  className={`${color?"active":"notactive"}`}/>
  <path id="Path_56399" data-name="Path 56399" d="M9.184,13.326A3.854,3.854,0,0,1,13.03,9.479h3.136a4.727,4.727,0,1,0-5.279,7.6A5.041,5.041,0,0,1,9.184,13.326Z" transform="translate(1.469 1.469)"  className={`${color?"active":"notactive"}`}/>
  <path id="Path_56400" data-name="Path 56400" d="M22.836,9a3.546,3.546,0,0,0-3.424,2.663H12.479A1.482,1.482,0,0,0,11,13.143v.888a.888.888,0,0,0,1.775,0v-.592h.592v.592a.888.888,0,0,0,1.775,0v-.592h4.269A3.545,3.545,0,1,0,22.836,9Zm0,5.326a1.775,1.775,0,1,1,1.775-1.775A1.778,1.778,0,0,1,22.836,14.326Z" transform="translate(2.019 1.652)"  className={`${color?"active":"notactive"}`}/>
</svg>


        </div>
    )
}
