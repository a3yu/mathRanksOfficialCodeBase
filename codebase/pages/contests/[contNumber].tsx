import { useRouter } from "next/router";

const Contests = () => {
  const router = useRouter();
  const { contNumber } = router.query;

  return <h1>Post: {contNumber}</h1>;
};

export default Contests;
