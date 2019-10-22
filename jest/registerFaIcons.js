import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSearch, faBook
} from '@fortawesome/free-solid-svg-icons';

export default function registerIcons() {
    library.add(
        faSearch, faBook
    );
}