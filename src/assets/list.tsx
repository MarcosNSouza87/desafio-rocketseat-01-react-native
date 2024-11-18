import React from 'react';
import * as RSVG from 'react-native-svg';

interface IListIcon {
  size?: string
}

const ListIcon = ({size = "100"}:IListIcon) => {
  return (
    <RSVG.Svg width={size} height={size} viewBox="0 0 131 166" fill="none" >
      <RSVG.Path fillRule="evenodd" clipRule="evenodd" d="M31 13C31 5.8203 36.8203 0 44 0H88C94.5568 0 99.9798 4.85417 100.871 11.1649C117.31 12.8077 130.252 26.5293 130.487 43.4074C130.936 75.6804 130.953 101.338 130.5 133.617C130.248 151.607 115.549 166 97.5784 166H34.8756C16.674 166 2.08749 151.276 1.47812 133.213C1.27726 127.26 1.04345 122.264 0.82227 117.537C0.133018 102.808 -0.433622 90.6995 0.501429 60.4074L1.5 43C2 39.5 3.73067 33.2099 5.9894 28.5634C8.26775 23.8765 11.3745 19.3174 14.6003 16.6781C15.8826 15.6289 17.7727 15.818 18.8219 17.1003C19.8711 18.3826 19.6821 20.2727 18.3997 21.3219C16.1255 23.1826 13.4823 26.8735 11.3856 31.1866C9.28777 35.5021 8 40 8 43.1022L6.34332 65.9591C6.32538 66.2223 6.42372 65.7203 6.34332 65.9591C5.64026 92.1213 6.16971 103.437 6.81396 117.207C7.03581 121.949 7.27127 126.981 7.4747 133.011C7.97939 147.97 20.0374 160 34.8756 160H97.5784C112.289 160 124.295 148.221 124.501 133.533C124.953 101.312 124.936 75.7105 124.488 43.4909C124.297 29.8234 113.901 18.6696 100.61 17.1712C99.1949 22.8181 94.0858 27 88 27H44C36.8203 27 31 21.1797 31 14V13ZM44 6C40.134 6 37 9.13401 37 13V14C37 17.866 40.134 21 44 21H88C91.866 21 95 17.866 95 14V13C95 9.13401 91.866 6 88 6H44ZM34.5 64.5C34.5 62.8431 35.8431 61.5 37.5 61.5H94.5C96.1569 61.5 97.5 62.8431 97.5 64.5C97.5 66.1569 96.1569 67.5 94.5 67.5H37.5C35.8431 67.5 34.5 66.1569 34.5 64.5ZM35 87C35 85.3431 36.3431 84 38 84H95C96.6569 84 98 85.3431 98 87C98 88.6569 96.6569 90 95 90H38C36.3431 90 35 88.6569 35 87ZM34 112C34 110.343 35.3431 109 37 109H67.5C69.1569 109 70.5 110.343 70.5 112C70.5 113.657 69.1569 115 67.5 115H37C35.3431 115 34 113.657 34 112Z" fill="#3D3D3D"/>
    </RSVG.Svg>
  )
}

export default ListIcon