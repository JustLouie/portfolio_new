import Container from "@/components/Container";


export default function Home() {
  return (
    <div className="home-page ">
      <section className="welcome-section">
        <Container>
          <div>
            <div>
              <h1>George is a <span>Software Engineer</span></h1>
              <p>
                He crafts responsive websites where technologies meet creativity
              </p>

            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
