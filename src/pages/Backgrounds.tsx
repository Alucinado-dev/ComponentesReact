import BlobBackground from "../components/Backgrounds/Blobs";
import GradientBackground from "../components/Backgrounds/GradientBackground";
import MeshBackground from "../components/Backgrounds/MeshBackground";
import MeteorShower from "../components/Backgrounds/MeteorShower";
import StarField from "../components/Backgrounds/Starfield";
import Container from "../container/Container";

export default function Backgrounds() {
  return (
    <div className="min-h-screen">
      <h1>Backgrounds Page</h1>

      <div className=" flex flex-col gap-20 justify-between items-center">
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
            <p className="text-white text-center mt-4">
              Meteor Shower Background
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4 relative">
            <StarField
              color="#ee1"
              count={500}
              fadeEdgePercent={0}
              twinkleIntensity={0.8}
            />
            <p className="text-white text-center mt-4">Star Field Background</p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4 relative">
            <BlobBackground
              blobs={[
                {
                  color: "#24a5ff",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "bottom",
                  opacity: 0.015,
                  shape: "organic",
                  x: "10%",
                  y: "25%",
                },
                {
                  color: "linear-gradient(#af157d, #c41125)",
                  blur: 10,
                  anchorX: "right",
                  anchorY: "top",
                  opacity: 0.025,
                  shape: "organic",
                  x: "90%",
                  y: "65%",
                },
                {
                  color: "linear-gradient(#7219b5, #e40b5c)",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "center",
                  opacity: 0.02,
                  shape: "organic",
                  x: "50%",
                  y: "50%",
                },
                {
                  color: "linear-gradient(#ff6a00, #ee0979)",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "center",
                  opacity: 0.02,
                  shape: "organic",
                  x: "80%",
                  y: "20%",
                },
                {
                  color: "linear-gradient(#00c9ff, #92fe9d)",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "center",
                  opacity: 0.02,
                  shape: "organic",
                  x: "20%",
                  y: "80%",
                },
                {
                  color: "linear-gradient(#f7971e, #ffd200)",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "center",
                  opacity: 0.02,
                  shape: "organic",
                  x: "70%",
                  y: "30%",
                },
                {
                  color: "linear-gradient(#00c9ff, #92fe9d)",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "center",
                  opacity: 0.02,
                  shape: "organic",
                  x: "30%",
                  y: "70%",
                },
                {
                  color: "linear-gradient(#f7971e, #ffd200)",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "center",
                  opacity: 0.02,
                  shape: "organic",
                  x: "50%",
                  y: "50%",
                },
                {
                  color: "linear-gradient(#ff6a00, #ee0979)",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "center",
                  opacity: 0.02,
                  shape: "organic",
                  x: "80%",
                  y: "20%",
                },
                {
                  color: "linear-gradient(#00c9ff, #92fe9d)",
                  blur: 10,
                  anchorX: "center",
                  anchorY: "center",
                  opacity: 0.02,
                  shape: "organic",
                  x: "20%",
                  y: "80%",
                },
              ]}
            />
            <p className="text-white text-center mt-4">Blob Background</p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <GradientBackground
              gradient={{
                type: "linear",
                angle: 135,
                stops: [
                  { color: "#0f0f11" },
                  { color: "#1a1a2e", position: "50%" },
                  { color: "#3ca2fa22" },
                ],
              }}
            />
            <p className="text-white text-center mt-4 z-10 relative">
              Gradient Background linear diagonal
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            {" "}
            <GradientBackground
              gradient={{
                type: "linear",
                angle: "to top",
                stops: [
                  { color: "#0f0f11", position: "0%" },
                  { color: "#7209b7", position: "60%" },
                  { color: "#f72585", position: "100%" },
                ],
              }}
            />
            <p className="text-white text-center mt-4 z-30">
              Gradient Background linear de baixo pra cima
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <GradientBackground
              gradient={{
                type: "linear",
                angle: "to top",
                stops: [
                  { color: "#03071e", position: "0%" },
                  { color: "#370617", position: "20%" },
                  { color: "#6a040f", position: "40%" },
                  { color: "#d00000", position: "65%" },
                  { color: "#ffba08", position: "100%" },
                ],
              }}
            />
            <p className="text-white text-center mt-4 z-20">
              Gradient Background linear de baixo pra cima com várias cores
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <GradientBackground
              gradient={{
                type: "radial",
                shape: "circle",
                size: "125% 125% at 50% 10%",
                stops: [
                  { color: "#0F0F1166", position: "50%" },
                  { color: "#3ca2fa33", position: "100%" },
                ],
              }}
            />
          </div>
          <p className="text-white text-center mt-4">
            Gradient Background radial luz vindo de cima
          </p>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <GradientBackground
              gradient={{
                type: "radial",
                shape: "ellipse",
                size: "100% 80% at 20% 80%",
                stops: [
                  { color: "#4cc9f0", position: "0%" },
                  { color: "#0f0f11", position: "100%" },
                ],
              }}
            />
            <p className="text-white text-center mt-4">
              Gradient Background radial elipse vindo de baixo pra direita
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            {" "}
            <GradientBackground
              gradient={{
                type: "radial",
                shape: "circle",
                size: "80% 80% at 50% 50%",
                stops: [
                  { color: "#1a1040", position: "0%" },
                  { color: "#0f0f11", position: "100%" },
                ],
              }}
            />
            <p className="text-white text-center mt-4">
              Gradient Background vinheta invertida
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <MeshBackground
              background="#0f0f11"
              points={[
                { color: "#f72585", x: 20, y: 30, spread: 55, opacity: 0.8 },
                { color: "#4cc9f0", x: 80, y: 10, spread: 60, opacity: 0.8 },
                { color: "#7209b7", x: 50, y: 85, spread: 50, opacity: 0.8 },
              ]}
            />
            <p className="text-white text-center mt-4">
              Gradient Background mesh com pontos de cor
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <MeshBackground
              background="#0d1117"
              points={[
                { color: "#06d6a0", x: 10, y: 50, spread: 65, opacity: 0.8 },
                { color: "#ffd166", x: 90, y: 20, spread: 55, opacity: 0.8 },
                { color: "#ef476f", x: 60, y: 90, spread: 45, opacity: 0.8 },
              ]}
            />
            <p className="text-white text-center mt-4">
              Gradient Background mesh com pontos de cores quentes
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <MeshBackground
              background="#080810"
              points={[
                { color: "#f72585", x: 0, y: 0, spread: 60, opacity: 0.7 },
                { color: "#4361ee", x: 100, y: 0, spread: 60, opacity: 0.7 },
                { color: "#4cc9f0", x: 0, y: 100, spread: 60, opacity: 0.7 },
                { color: "#7209b7", x: 100, y: 100, spread: 60, opacity: 0.7 },
              ]}
            />
            <p className="text-white text-center mt-4">
              Gradient Background mesh com 4 pontos de cores frias
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <MeshBackground
              background="#0f0f11"
              points={[
                { color: "#4cc9f0", x: 30, y: 20, spread: 70, opacity: 0.25 },
                { color: "#7209b7", x: 70, y: 70, spread: 65, opacity: 0.2 },
              ]}
            />
            <p className="text-white text-center mt-4">
              Gradient Background mesh com opacidade baixa, quase monocromatico
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <GradientBackground
              gradient={{
                type: "linear",
                angle: 135,
                stops: [
                  { color: "#0f0f11" },
                  { color: "#7209b7" },
                  { color: "#3ca2fa" },
                  { color: "#f72585" },
                  { color: "#0f0f11" },
                ],
              }}
              animation={{
                mode: "shift",
                duration: 8,
                easing: "ease-in-out",
              }}
            />
            <p className="text-white text-center mt-4">
              Linear com shift — desliza o gradiente continuamente (sem repetir
              as bordas)
            </p>
          </div>
        </Container>

        <Container>
          <div className="bg-gray-950 h-screen p-4  relative">
            <MeshBackground
              background="#f0f4ff"
              points={[
                { color: "#a78bfa", x: 20, y: 20, spread: 60, opacity: 0.6 },
                { color: "#f472b6", x: 80, y: 30, spread: 55, opacity: 0.5 },
                { color: "#60a5fa", x: 50, y: 80, spread: 65, opacity: 0.5 },
              ]}
            />
            <p className="text-white text-center mt-4">Mesh com fundo claro</p>
          </div>
        </Container>

        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "relative",
          }}
        >
          <div
            ref={(el) => {
              if (el)
                el.style.background =
                  "radial-gradient(circle 55% at 20% 30%, #f72585 0%, transparent 100%), radial-gradient(circle 60% at 80% 10%, #4cc9f0 0%, transparent 100%), linear-gradient(#0f0f11, #0f0f11)";
            }}
            style={{
              position: "absolute",
              inset: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
}
