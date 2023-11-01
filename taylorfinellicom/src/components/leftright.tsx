import React from 'react';

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
