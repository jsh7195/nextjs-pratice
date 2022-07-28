import { configurePersist } from 'zustand-persist';
const { persist, purge } = configurePersist({
    storage: sessionStorage,
});
export default persist;
export { purge };
