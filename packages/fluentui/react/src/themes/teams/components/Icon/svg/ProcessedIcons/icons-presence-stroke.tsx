import * as React from 'react';
import cx from 'classnames';
import { TeamsProcessedSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(teamsIconClassNames.filled, classes.filledPart)}
          d="M8,0 C8.71875359,0 9.41796535,0.0937490625 10.0976562,0.28125 C10.7773471,0.468750937 11.421872,0.739581563 12.03125,1.09375 C12.6197946,1.44271008 13.1588517,1.86197672 13.6484375,2.3515625 C14.1380233,2.84114828 14.5572899,3.38020539 14.90625,3.96875 C15.2604184,4.57812805 15.5312491,5.22265285 15.71875,5.90234375 C15.9062509,6.58203465 16,7.28124641 16,8 C16,8.71875359 15.9049489,9.41796535 15.7148438,10.0976562 C15.5247386,10.7773471 15.2552101,11.4192678 14.90625,12.0234375 C14.5572899,12.6171905 14.1380233,13.1588517 13.6484375,13.6484375 C13.1588517,14.1380233 12.6197946,14.5546858 12.03125,14.8984375 C11.4270803,15.2526059 10.7838576,15.5247386 10.1015625,15.7148438 C9.41926742,15.9049489 8.71875359,16 8,16 C7.28124641,16 6.58203465,15.9049489 5.90234375,15.7148438 C5.22265285,15.5247386 4.58073219,15.2526059 3.9765625,14.8984375 C3.38280953,14.5546858 2.84114828,14.1380233 2.3515625,13.6484375 C1.86197672,13.1588517 1.44531422,12.6171905 1.1015625,12.0234375 C0.747394063,11.4192678 0.475261367,10.7773471 0.28515625,10.0976562 C0.0950511328,9.41796535 0,8.71875359 0,8 C0,7.28124641 0.0950511328,6.58073258 0.28515625,5.8984375 C0.475261367,5.21614242 0.747394063,4.57291969 1.1015625,3.96875 C1.44531422,3.38020539 1.86197672,2.84114828 2.3515625,2.3515625 C2.84114828,1.86197672 3.38280953,1.44271008 3.9765625,1.09375 C4.58073219,0.744789922 5.22265285,0.475261367 5.90234375,0.28515625 C6.58203465,0.0950511328 7.28124641,0 8,0 Z M8,1.6875 C7.43228883,1.6875 6.87890895,1.76171801 6.33984375,1.91015625 C5.80077855,2.05859449 5.2942732,2.27083195 4.8203125,2.546875 C4.35156016,2.81770969 3.92578316,3.14713348 3.54296875,3.53515625 C3.16015434,3.92317902 2.83073055,4.35156016 2.5546875,4.8203125 C2.27343609,5.29948156 2.05859449,5.80728898 1.91015625,6.34375 C1.76171801,6.88021102 1.6875,7.43228883 1.6875,8 C1.6875,8.56771117 1.76171801,9.11978898 1.91015625,9.65625 C2.05859449,10.192711 2.27343609,10.7005184 2.5546875,11.1796875 C2.82552219,11.6484398 3.15364391,12.0742168 3.5390625,12.4570312 C3.92448109,12.8398457 4.35156016,13.1692695 4.8203125,13.4453125 C5.29948156,13.7265639 5.80728898,13.9414055 6.34375,14.0898438 C6.88021102,14.238282 7.43228883,14.3125 8,14.3125 C8.56771117,14.3125 9.11978898,14.238282 9.65625,14.0898438 C10.192711,13.9414055 10.7005184,13.7265639 11.1796875,13.4453125 C11.6484398,13.1692695 12.076821,12.8398457 12.4648438,12.4570312 C12.8528665,12.0742168 13.1822903,11.6484398 13.453125,11.1796875 C13.729168,10.7057268 13.9414055,10.1992214 14.0898438,9.66015625 C14.238282,9.12109105 14.3125,8.56771117 14.3125,8 C14.3125,7.43228883 14.238282,6.87890895 14.0898438,6.33984375 C13.9414055,5.80077855 13.729168,5.2942732 13.453125,4.8203125 C13.1822903,4.35156016 12.8528665,3.92448109 12.4648438,3.5390625 C12.076821,3.15364391 11.6484398,2.82291805 11.1796875,2.546875 C10.7057268,2.27083195 10.1992214,2.05859449 9.66015625,1.91015625 C9.12109105,1.76171801 8.56771117,1.6875 8,1.6875 Z"
        />
      </g>
    </svg>
  ),
  styles: {},
  exportedAs: 'presence-stroke'
} as TeamsProcessedSvgIconSpec;