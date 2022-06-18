import {useState} from 'react'

function useService() {
    
    const [serviceId, setServiceId] = useState({});
    const useService = () => {
    setServiceId(service);
    };
    return serviceId
}

export default useService