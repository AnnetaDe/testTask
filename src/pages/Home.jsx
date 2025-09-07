import { Container } from '../components/Container/Container';
import { RedButtonLink } from '../components/RedButton/RedButton';

export const Home = () => {
  return (
    <div className="w-full h-[calc(100vh-72px)] bg-[url('/hero.png')] bg-cover bg-center flex items-center justify-start">
      <Container className="">
        <div className="mb-10">
          <h1 className="text-5xl font-semibold text-[#F7F7F7]">Campers of your dreams</h1>
          <p className="mt-2 text-2xl font-semibold text-[#F7F7F7]">
            You can find everything you want in our catalog
          </p>
        </div>
        <RedButtonLink text="View Now" to="/catalog" />
      </Container>
    </div>
  );
};
