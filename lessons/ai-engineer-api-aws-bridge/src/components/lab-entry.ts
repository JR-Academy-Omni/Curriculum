import { assetPath } from './ui';
export function labEntry(){return ['localhost','127.0.0.1'].includes(location.hostname)?'http://127.0.0.1:8047/':assetPath('materials/lab-guide.html')}
