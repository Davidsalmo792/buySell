import CategoryLayout from "../components/CategoryLayout";
import CarList from "../components/CarList";

function Fordon() {
    return (
        <CategoryLayout title="Fordon">
            <p>bilar till salu</p>
            <CarList />
        </CategoryLayout>
    );
}

export default Fordon;
