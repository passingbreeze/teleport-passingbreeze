/*
Copyright 2023 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';

import type { SVGIconProps } from './common';

export function ManageClustersIcon({
  size = 14,
  fill = 'white',
}: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75009 4.2C1.55671 4.2 1.40009 4.04338 1.40009 3.85V0.35C1.40009 0.156625 1.55671 0 1.75009 0C1.94346 0 2.10009 0.156625 2.10009 0.35V3.85C2.10009 4.04338 1.94346 4.2 1.75009 4.2ZM1.75009 14C1.55671 14 1.40009 13.8434 1.40009 13.65V8.05004C1.40009 7.85667 1.55671 7.70004 1.75009 7.70004C1.94346 7.70004 2.10009 7.85667 2.10009 8.05004V13.65C2.10009 13.8434 1.94346 14 1.75009 14ZM1.05 7.00009H2.45C3.02881 7.00009 3.5 6.5289 3.5 5.95009C3.5 5.37127 3.02881 4.90009 2.45 4.90009H1.05C0.471188 4.90009 0 5.37127 0 5.95009C0 6.5289 0.471188 7.00009 1.05 7.00009ZM0.7 5.95009C0.7 5.75671 0.856625 5.60009 1.05 5.60009H2.45C2.64337 5.60009 2.8 5.75671 2.8 5.95009C2.8 6.14346 2.64337 6.30009 2.45 6.30009H1.05C0.856625 6.30009 0.7 6.14346 0.7 5.95009ZM6.65017 14C6.4568 14 6.30017 13.8434 6.30017 13.65V10.85C6.30017 10.6566 6.4568 10.5 6.65017 10.5C6.84355 10.5 7.00017 10.6566 7.00017 10.85V13.65C7.00017 13.8434 6.84355 14 6.65017 14ZM6.30017 6.65C6.30017 6.84337 6.4568 7 6.65017 7C6.84355 7 7.00017 6.84337 7.00017 6.65V0.35C7.00017 0.156625 6.84355 0 6.65017 0C6.4568 0 6.30017 0.156625 6.30017 0.35V6.65ZM7.35008 9.80004H5.95009C5.37127 9.80004 4.90009 9.32885 4.90009 8.75004C4.90009 8.17123 5.37127 7.70004 5.95009 7.70004H7.35008C7.9289 7.70004 8.40009 8.17123 8.40009 8.75004C8.40009 9.32885 7.9289 9.80004 7.35008 9.80004ZM5.95009 8.40004C5.75671 8.40004 5.60009 8.55667 5.60009 8.75004C5.60009 8.94342 5.75671 9.10004 5.95009 9.10004H7.35008C7.54346 9.10004 7.70009 8.94342 7.70009 8.75004C7.70009 8.55667 7.54346 8.40004 7.35008 8.40004H5.95009ZM11.1998 13.65C11.1998 13.8433 11.3565 14 11.5498 14C11.7432 14 11.8998 13.8433 11.8998 13.65V6.64996C11.8998 6.45658 11.7432 6.29996 11.5498 6.29996C11.3565 6.29996 11.1998 6.45658 11.1998 6.64996V13.65ZM11.5498 2.8C11.3565 2.8 11.1998 2.64337 11.1998 2.45V0.35C11.1998 0.156625 11.3565 0 11.5498 0C11.7432 0 11.8998 0.156625 11.8998 0.35V2.45C11.8998 2.64337 11.7432 2.8 11.5498 2.8ZM10.8502 5.6H12.2502C12.829 5.6 13.3002 5.12881 13.3002 4.55C13.3002 3.97119 12.829 3.5 12.2502 3.5H10.8502C10.2714 3.5 9.80017 3.97119 9.80017 4.55C9.80017 5.12881 10.2714 5.6 10.8502 5.6ZM10.5002 4.55C10.5002 4.35662 10.6568 4.2 10.8502 4.2H12.2502C12.4435 4.2 12.6002 4.35662 12.6002 4.55C12.6002 4.74337 12.4435 4.9 12.2502 4.9H10.8502C10.6568 4.9 10.5002 4.74337 10.5002 4.55Z"
      />
    </svg>
  );
}