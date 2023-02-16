import React from "react";
import { SvgXml } from "react-native-svg";
import {
    StyleSheet,
} from 'react-native';

export default function SuccessIcon({ width = 96, height = 96 }) {
    const success = `<svg width="${width}" height="${height}" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67.5 69L64.5 72L62.4075 72.7163L48.2887 77.5462L34.0969 82.4006L20.0513 87.2063L7.5 91.5H4.5V88.5L7.06687 82.3388L10.7156 73.5806L14.3644 64.8244L18.2812 55.425L21.6619 47.3119L25.3106 38.5556L27 34.5L30 31.5L44.1 45.6L60.2981 61.7981L67.5 69Z" fill="#D69651"/>
<path d="M34.0969 82.4007L20.0512 87.2063L7.06686 82.3388L10.7156 73.5807L34.0969 82.4007Z" fill="#C78640"/>
<path d="M62.4075 72.7162L48.2888 77.5462L14.3644 64.8243L18.2813 55.4249L62.4075 72.7162Z" fill="#C78640"/>
<path d="M60.2981 61.7981L21.6618 47.3119L25.3106 38.5556L44.1 45.6L60.2981 61.7981Z" fill="#C78640"/>
<path d="M37.5 30L43.7723 23.7276C44.5584 22.9416 45 21.8755 45 20.7638C45 19.9436 44.7593 19.1413 44.3077 18.4565C43.8562 17.7717 43.2136 17.2344 42.4596 16.9113L38.554 15.2374C35.898 14.0991 33.5874 12.2833 31.8536 9.97153L30 7.5L34.5 4.5C36.4444 7.41655 39.3054 9.6018 42.6308 10.7103L44.4173 11.3058C46.3342 11.9447 48.0014 13.1706 49.1828 14.8097C50.3643 16.4489 51 18.4182 51 20.4387C51 22.7368 50.1779 24.9591 48.6824 26.7039L42 34.5L37.5 30Z" fill="#FFC431"/>
<path d="M58.5 22.5L57 13.5L66 16.5L58.5 22.5Z" fill="#D1E4FF"/>
<path d="M49.1595 7.46426L49.8885 4.55426L55.8876 6.05714L55.1586 8.96714L49.1595 7.46426Z" fill="#FB6A83"/>
<path d="M63.6662 6.23251L68.1659 3.23094L69.8309 5.72694L65.3312 8.72851L63.6662 6.23251Z" fill="#FFC431"/>
<path d="M28.5483 16.848L31.4583 16.119L32.9612 22.1181L30.0512 22.8471L28.5483 16.848Z" fill="#6173E8"/>
<path d="M66 58.5L72.2724 52.2276C73.0584 51.4416 74.1245 51 75.2362 51C76.0564 51 76.8587 51.2407 77.5435 51.6923C78.2283 52.1438 78.7656 52.7864 79.0887 53.5404L80.7626 57.446C81.9009 60.1021 83.7167 62.4126 86.0285 64.1464L88.5 66L91.5 61.5C88.5835 59.5556 86.3982 56.6946 85.2897 53.3692L84.6942 51.5827C84.0553 49.6658 82.8294 47.9986 81.1903 46.8172C79.5511 45.6357 77.5818 45 75.5613 45C73.2632 45 71.0409 45.8221 69.2961 47.3176L61.5 54L66 58.5Z" fill="#6173E8"/>
<path d="M78 39L87 40.5L84 31.5L78 39Z" fill="#FFC431"/>
<path d="M87.0532 45.3167L89.9632 44.5876L91.466 50.5868L88.556 51.3158L87.0532 45.3167Z" fill="#FB6A83"/>
<path d="M87.2767 30.6806L90.2783 26.1809L92.7743 27.8459L89.7727 32.3456L87.2767 30.6806Z" fill="#D1E4FF"/>
<path d="M73.1623 65.9949L73.8913 63.0849L79.8905 64.5877L79.1615 67.4978L73.1623 65.9949Z" fill="#6173E8"/>
<path d="M48 42L53.974 35.0258C55.9138 32.7608 58.6417 31.3176 61.6055 30.9883L61.7758 30.9694C64.3181 30.6908 66.7094 29.6235 68.6145 27.9173C70.5196 26.211 71.8429 23.9513 72.3989 21.455V21.455C72.7312 19.9597 73.4655 18.5835 74.5225 17.475C75.5795 16.3664 76.9192 15.5675 78.397 15.1645L90 12L91.5 18L83.3886 19.8025C81.7866 20.1585 80.3231 20.9737 79.177 22.1484C78.0309 23.323 77.252 24.8062 76.9356 26.4165L76.893 26.6332C76.3607 29.3407 74.9713 31.8051 72.9302 33.662C70.8891 35.5188 68.3046 36.6696 65.559 36.9441L65.3817 36.9618C61.937 37.298 58.7634 38.9777 56.5484 41.6372C54.5824 44.0011 52.5 46.5 52.5 46.5L48 42Z" fill="#FB6A83"/>
</svg>
`
    const SuccessSvg = () => <SvgXml xml={success}/>
    return <SuccessSvg/>
}
