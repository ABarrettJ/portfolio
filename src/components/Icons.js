export const LinkedIn = (props) => (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      width={27}
      height={27}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#FFF"
        strokeLinejoin="round"
        d="M22 3.47v17.06A1.47 1.47 0 0 1 20.53 22H3.47A1.47 1.47 0 0 1 2 20.53V3.47A1.47 1.47 0 0 1 3.47 2h17.06A1.47 1.47 0 0 1 22 3.47ZM7.882 9.648h-2.94v9.412h2.94V9.647Zm.265-3.235a1.694 1.694 0 0 0-1.682-1.706h-.053a1.706 1.706 0 0 0 0 3.412 1.694 1.694 0 0 0 1.735-1.653v-.053Zm10.912 6.93c0-2.83-1.8-3.93-3.588-3.93a3.353 3.353 0 0 0-2.977 1.517h-.082V9.647H9.647v9.412h2.941v-5.006a1.953 1.953 0 0 1 1.765-2.106h.112c.935 0 1.63.588 1.63 2.07v5.042h2.94l.024-5.718Z"
      />
    </svg>
  );

export const Download = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      className='dl-icon'
      {...props}
    >
      <path

        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 17h.01m.39-3h.6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 15.602 21 16.068 21 17c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C19.398 20 18.932 20 18 20H6c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 14 5.068 14 6 14h.6m5.4 1V4m0 11-3-3m3 3 3-3"
      />
    </svg>
  );

export const ExpandIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      stroke="#FFF"
      viewBox="0 0 20 20"
      className='expand-icon'
      {...props}
    >
      <path

        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19H5v-5m9-9h5v5"
      />
    </svg>
  );

export const CollapseIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      stroke="#FFF"
      viewBox="0 -5 40 48"
      className='expand-icon'
      {...props}
    >
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
        <path d="M44 20H28V4M4 28h16v16" />
      </g>
    </svg>
  )

  export function GL2(){
    return(
    <span data-testid="brand-header-default-logo"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" height="24" width="25" class="tanuki-logo">
    <path fill="#E24329" d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" class="tanuki-shape tanuki"></path>
    <path fill="#FC6D26" d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z" class="tanuki-shape right-cheek"></path>
    <path fill="#FCA326" d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z" class="tanuki-shape chin"></path>
    <path fill="#FC6D26" d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z" class="tanuki-shape left-cheek"></path>
  </svg>
  </span>
    );
  }


export const Dots = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={10}
      fill="none"
      {...props}
    >
      <path
        fill="#6B7280"
        fillOpacity={0.5}
        d="M5.067 0c2.798 0 5.066 2.239 5.066 5s-2.268 5-5.066 5C2.268 10 0 7.761 0 5s2.268-5 5.067-5Z"
      />
      <path
        stroke="#2F2F2F"
        strokeOpacity={0.5}
        d="M5.067.313C7.69.313 9.817 2.41 9.817 5c0 2.589-2.127 4.688-4.75 4.688-2.624 0-4.75-2.1-4.75-4.688 0-2.589 2.126-4.688 4.75-4.688Z"
      />
      <path
        fill="#6B7280"
        fillOpacity={0.5}
        d="M19 0c2.798 0 5.067 2.239 5.067 5S21.798 10 19 10s-5.067-2.239-5.067-5S16.202 0 19 0Z"
      />
      <path
        stroke="#2F2F2F"
        strokeOpacity={0.5}
        d="M19 .313c2.623 0 4.75 2.098 4.75 4.687 0 2.589-2.127 4.688-4.75 4.688S14.25 7.588 14.25 5c0-2.589 2.127-4.688 4.75-4.688Z"
      />
      <path
        fill="#6B7280"
        fillOpacity={0.5}
        d="M32.933 0C35.731 0 38 2.239 38 5s-2.269 5-5.067 5-5.066-2.239-5.066-5 2.268-5 5.066-5Z"
      />
      <path
        stroke="#2F2F2F"
        strokeOpacity={0.5}
        d="M32.933.313c2.624 0 4.75 2.098 4.75 4.687 0 2.589-2.126 4.688-4.75 4.688-2.623 0-4.75-2.1-4.75-4.688 0-2.589 2.127-4.688 4.75-4.688Z"
      />
    </svg>
  )
