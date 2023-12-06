import React from 'react';
import '/src/components/Name/name.css'

function LeftSection(props: any) {
  return (
    <div>
        {props.children}
    </div>
  );
}

function RightSection(props: any) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export { LeftSection, RightSection };
