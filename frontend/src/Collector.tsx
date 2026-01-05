import { useRoutes } from 'react-router-dom'
import { ThreeHouse } from '../routes/ThreeHouse'

const Collector = () => {
    const routes = useRoutes(ThreeHouse)
    return routes
}

export default Collector