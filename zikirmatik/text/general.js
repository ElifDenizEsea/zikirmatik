
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next'
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

i18next.use(RNLanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'tur',
    debug: true,
    compatibilityJSON: 'v3', 
    resources: {
        en:{
            translation: require('./English.json'),
        },
        tur:{
            translation: require('./Turkish.json'),
        },
    }
})
i18next.locale = 'tur';
export default i18next;