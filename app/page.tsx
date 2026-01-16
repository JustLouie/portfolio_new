import Button from "@/components/Button";
import Container from "@/components/Container";
import AnimatedImageSection from "@/components/AnimatedImageSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page ">
      <section className="welcome-section">
        <Container>
          <div className='flex items-center pt-[144px] gap-5'>
            <div className="flex-1 flex-col w-full">
              <h1 className="max-w-lg text-[44px] text-white font-bold">
                Hi, I'm George — a <span className="text-purple-100">Software Engineer</span>
              
              </h1>
              <p className="max-w-lg text-gray-100">
                I build scalable web applications and transform ideas into elegant, user-centric digital experiences
              </p>
              <Button className="mt-10">
                contact me
              </Button>
            </div>
            <AnimatedImageSection />
          </div>
          <div className="flex justify-center py-10 my-10">
            <div className="relative max-w-2xl">
              {/* Quote Card */}
              <div className="relative border border-gray-100 bg-dark-100 p-8 md:p-10">
                {/* Top-left quotation mark */}
                <div className="absolute flex justify-center items-center w-[41px] h-[41px] -top-6 left-9 bg-dark-100">
                  <Image src='/icons/asterix.svg' alt='asterix' width={25} height={25} />
                </div>
                
                <p className="text-white text-xl md:text-2xl font-light relative z-10 tracking-wide">
                  With great power comes great electricity bill
                </p>
                
                <div className="absolute right-0 -bottom-[45px] border border-gray-100 py-2 px-4 max-w-fit ml-auto">
                  <p className="text-white text-base md:text-lg font-light text-right">
                    - Dr. Who
                  </p>
                </div>
                
                <div className="absolute flex justify-center items-center w-[41px] h-[41px] right-6 -bottom-4 bg-dark-100 rounded-full">
                  <Image src='/icons/asterix.svg' alt='asterix' width={25} height={25} />
                </div>
              </div>
            </div>
          </div>
        </Container>
          
      </section>
    </div>
  );
}
