import React from 'react';
import TechCard from './TechCard';

const Toolkit = () => {
    const gitSvg = '<path d="M29.472 14.753L17.247 2.528a1.8 1.8 0 00-2.55 0l-2.539 2.539 3.22 3.22a2.141 2.141 0 012.712 2.73l3.1 3.1a2.143 2.143 0 11-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 11-1.764-.062V12.3a2.146 2.146 0 01-1.165-2.814l-3.17-3.172L2.528 14.7a1.8 1.8 0 000 2.551l12.225 12.221a1.8 1.8 0 002.55 0L29.472 17.3a1.8 1.8 0 000-2.551" fill="#dd4c35"></path><path d="M12.158 5.067l3.22 3.22a2.141 2.141 0 012.712 2.73l3.1 3.1a2.143 2.143 0 11-1.285 1.21l-2.895-2.895v7.617a2.141 2.141 0 11-1.764-.062V12.3a2.146 2.146 0 01-1.165-2.814l-3.17-3.172" fill="#fff"></path>';
    const htmlSvg = '<path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30 5.902 27.201z"></path><path fill="#f1662a" d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z"></path><path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16v-3.091zm0 8.027l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004v-3.216z"></path><path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83h-7.743z"></path>';
    const cssSvg = '<path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30 5.902 27.201z"></path><path fill="#33a9dc" d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z"></path><path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829-.759 8.518H16v-3.091z"></path><path fill="#ebebeb" d="M16.019 21.218l-.014.004-3.442-.93-.22-2.465H9.24l.433 4.853 6.331 1.758.015-.004v-3.216z"></path><path fill="#fff" d="M19.827 16.151l-.372 4.139-3.447.93v3.216l6.336-1.756.047-.522.537-6.007h-3.101z"></path><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695-.141-1.567-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695-.14-1.567-.074-.829H16z"></path>';
    const jsSvg = '<path d="M18.774 19.7a3.727 3.727 0 003.376 2.078c1.418 0 2.324-.709 2.324-1.688 0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156 0-2.567 1.956-4.52 5.012-4.52A5.058 5.058 0 0126.9 10.52l-2.665 1.711a2.327 2.327 0 00-2.2-1.467 1.489 1.489 0 00-1.638 1.467c0 1.027.636 1.442 2.1 2.078l.856.366c2.908 1.247 4.549 2.518 4.549 5.376 0 3.081-2.42 4.769-5.671 4.769a6.575 6.575 0 01-6.236-3.5zM6.686 20c.538.954 1.027 1.76 2.2 1.76 1.124 0 1.834-.44 1.834-2.15V7.975h3.422v11.683c0 3.543-2.078 5.156-5.11 5.156A5.312 5.312 0 013.9 21.688z" fill="#f5de19"></path>';

    const reactSvg = '<path d="M16 21.706a28.385 28.385 0 01-8.88-1.2 11.3 11.3 0 01-3.657-1.958A3.543 3.543 0 012 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0116 10.293a28.674 28.674 0 019.022 1.324 11.376 11.376 0 013.538 1.866A3.391 3.391 0 0130 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 01-8.7 1.191zm0-10.217a27.948 27.948 0 00-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2 0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0016 20.51a27.6 27.6 0 008.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 00-1.01-1.573 10.194 10.194 0 00-3.161-1.654A27.462 27.462 0 0016 11.489z" fill="#00d8ff"></path><path d="M10.32 28.443a2.639 2.639 0 01-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 013.4-8.593 28.676 28.676 0 015.653-7.154 11.376 11.376 0 013.384-2.133 3.391 3.391 0 012.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 01-3.316 8.133 28.385 28.385 0 01-5.476 7.093 11.3 11.3 0 01-3.523 2.189 4.926 4.926 0 01-1.624.307zm1.773-14.7a27.948 27.948 0 00-3.26 8.219c-.553 2.915-.022 4.668.75 5.114.8.463 2.742.024 5.1-2.036a27.209 27.209 0 005.227-6.79 27.6 27.6 0 003.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 00-1.868.089A10.194 10.194 0 0017.5 6.9a27.464 27.464 0 00-5.4 6.849z" fill="#00d8ff"></path><path d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 01-5.747-7.237 28.676 28.676 0 01-3.374-8.471 11.376 11.376 0 01-.158-4A3.391 3.391 0 018.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 015.39 6.934 28.384 28.384 0 013.41 8.287 11.3 11.3 0 01.137 4.146 3.543 3.543 0 01-1.494 2.555 2.59 2.59 0 01-1.315.324zm-9.58-10.2a27.949 27.949 0 005.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0019.9 13.74a27.6 27.6 0 00-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 00-.855 1.662 10.194 10.194 0 00.153 3.565 27.465 27.465 0 003.236 8.1z" fill="#00d8ff"></path>';
    const mysqlSvg = '<path d="M8.785 6.865a3.055 3.055 0 00-.785.1V7h.038a6.461 6.461 0 00.612.785c.154.306.288.611.441.917l.038-.039a1.074 1.074 0 00.4-.957 4.314 4.314 0 01-.23-.4c-.115-.191-.364-.287-.517-.44" fill="#5d87a1" fill-rule="evenodd"></path><path d="M27.78 23.553a8.849 8.849 0 00-3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467 4.467 0 00.995 1.167c.4.306.8.611 1.225.879.745.461 1.588.728 2.314 1.187.422.268.842.612 1.264.9.21.153.343.4.611.5v-.058a3.844 3.844 0 00-.291-.613c-.191-.19-.383-.363-.575-.554a9.118 9.118 0 00-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69 7.69 0 001.321-.308c.65-.172 1.243-.133 1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338 25.338 0 00-3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594 7.594 0 01-.776-1.457 46.84 46.84 0 01-1.551-3.293 20.236 20.236 0 00-.965-2.157A19.078 19.078 0 0011.609 5a9.07 9.07 0 00-2.421-.776c-.474-.02-.946-.057-1.419-.075a7.55 7.55 0 01-.869-.664C5.818 2.8 3.038 1.328 2.242 3.277 1.732 4.508 3 5.718 3.435 6.343A8.866 8.866 0 014.4 7.762c.133.322.171.663.3 1a22.556 22.556 0 00.987 2.538 8.946 8.946 0 00.7 1.172c.153.209.417.3.474.645a5.421 5.421 0 00-.436 1.419 8.336 8.336 0 00.549 6.358c.3.473 1.022 1.514 1.987 1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53v.184s.483 1.061.723 1.6a10.813 10.813 0 002.4 2.59A3.514 3.514 0 0114 24.657V25h.427a1.054 1.054 0 00-.427-.788 9.4 9.4 0 01-.959-1.16 24.992 24.992 0 01-2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266 7.266 0 00-.884 1.313 11.419 11.419 0 00-.517 2.921c-.073.02-.037 0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756 8.756 0 01-.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767 7.767 0 01-.663-1.237C5.912 9.5 5.69 8.3 5.212 7.216a10.4 10.4 0 00-.921-1.489A9.586 9.586 0 013.276 4.22c-.092-.213-.221-.561-.074-.793a.3.3 0 01.259-.252c.238-.212.921.058 1.16.174a9.2 9.2 0 011.824.967c.258.194.866.685.866.685h.18c.612.133 1.3.037 1.876.21a12.247 12.247 0 012.755 1.32 16.981 16.981 0 015.969 6.545c.23.439.327.842.537 1.3.4.94.9 1.9 1.3 2.814a12.578 12.578 0 001.36 2.564c.286.4 1.435.612 1.952.822a13.7 13.7 0 011.32.535c.651.4 1.3.861 1.913 1.3.305.23 1.262.708 1.32 1.091" fill="#00758f" fill-rule="evenodd"></path>';
    const vueSvg = '<path d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6 3.22-5.6z" fill="#41b883"></path><path d="M2 3.925l14 24.15 14-24.15h-5.6L16 18.415 7.53 3.925z" fill="#41b883"></path><path d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6z" fill="#35495e"></path>';
    const twSvg = '<path d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z" fill="#44a8b3"></path>';

    const bsSvg = '<path fill="#673ab7" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M33.03,25.6c-0.65-0.9-1.59-1.52-2.8-1.85c0,0,1.02-0.37,1.94-1.75c0.55-0.88,0.83-1.94,0.83-3.18 c0-2.15-0.78-3.8-2.34-4.93C29.1,12.76,27.34,12,24.35,12H15v24h10.43c2.83-0.02,4.96-0.63,6.41-1.8c1.44-1.19,2.16-2.95,2.16-5.3 C34,27.6,33.68,26.5,33.03,25.6z M21,16c0,0,4.17,0,4.25,0c1.52,0,2.75,1.23,2.75,2.75c0,1.52-1.23,2.75-2.75,2.75 c-0.08,0-4.25,0-4.25,0V16z M26,32h-5v-6h5c1.66,0,3,1.34,3,3C29,30.66,27.66,32,26,32z"></path>';
    const djSvg = '<path d="M14.135 4H18.1v18.169a26.218 26.218 0 01-5.143.535c-4.842-.005-7.362-2.168-7.362-6.322 0-4 2.673-6.6 6.816-6.6a6.448 6.448 0 011.724.2V4zm0 9.142a3.992 3.992 0 00-1.337-.2c-2 0-3.163 1.223-3.163 3.366 0 2.087 1.107 3.239 3.138 3.239a9.355 9.355 0 001.362-.1v-6.3z" fill="#44b78b"></path><path d="M24.4 10.059v9.1c0 3.133-.235 4.639-.923 5.938A6.316 6.316 0 0120.237 28l-3.678-1.733a5.708 5.708 0 003.141-2.629c.566-1.121.745-2.42.745-5.837v-7.742zM20.441 4.02h3.964v4.028h-3.964z" fill="#44b78b"></path>';
    const pySvg = '<defs><linearGradient id="python_svg__a_419" x1="-133.268" y1="-202.91" x2="-133.198" y2="-202.84" gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387eb8"></stop><stop offset="1" stop-color="#366994"></stop></linearGradient><linearGradient id="python_svg__b_420" x1="-133.575" y1="-203.203" x2="-133.495" y2="-203.133" gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe052"></stop><stop offset="1" stop-color="#ffc331"></stop></linearGradient></defs><path d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712zm-3.732 2.137a1.214 1.214 0 11-1.183 1.244v-.02a1.214 1.214 0 011.214-1.214z" fill="url(#python_svg__a_419)"></path><path d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04zm3.732-2.147A1.214 1.214 0 1121 26.519v.03a1.214 1.214 0 01-1.214 1.214h.03z" fill="url(#python_svg__b_420)"></path>';
    const figSvg = '<path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path><circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>';


    return (
    <div className="flex h-auto w-screen justify-center">
        <div className="flex flex-col items-center mt-8">
            <p className="text-4xl text-header font-bold">My Toolkit</p>
            <p className="text-md text-center text-body">the skills, tools and technologies I use for my projects</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8">
                <TechCard svgData={gitSvg} title="git"/>
                <TechCard svgData={htmlSvg} title="html"/>
                <TechCard svgData={cssSvg} title="css"/>
                <TechCard svgData={jsSvg} title="javascript"/>

                <TechCard svgData={reactSvg} title="react"/>
                <TechCard svgData={mysqlSvg} title="mysql"/>
                <TechCard svgData={vueSvg} title="vue"/>
                <TechCard svgData={twSvg} title="tailwind"/>

                <TechCard svgData={bsSvg} title="bootstrap"/>
                <TechCard svgData={djSvg} title="django"/>
                <TechCard svgData={pySvg} title="python"/>
                <TechCard svgData={figSvg} title="figma"/>
            </div>
        </div>

    </div>
  )
}

export default Toolkit;