import MeteorShower from "../components/Backgrounds/MeteorShower";
import Container from "../container/Container";

export default function Backgrounds() {
    return (
        <div className="min-h-screen">
            <h1>Backgrounds Page</h1>

            <div className=" flex flex-col justify-between items-center">

                <Container>
                    <div className="bg-gray-950 h-screen p-4  relative">
                        <MeteorShower
                        angle={12}
                        color="#ee00ff"
                        count={50}
                        fadeEdgePercent={10}
                        fixed={false}
                        tailColor="#a1021499"
                        maxLength={200}
                        maxOpacity={0.6}
                        maxWidth={2}
                        minLength={50}
                        minOpacity={0.1}
                        minWidth={1}
                        opacity={1}
                        speed={3}
                        speedVariance={5}


                        />
                        <p className="text-white text-center mt-4">Meteor Shower Background</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}
