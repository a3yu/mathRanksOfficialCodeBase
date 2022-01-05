import Link from "next/link";

export default function About() {
  if (process.browser) {
    window.scrollTo(0, 0);
  }
  return (
    <div className="p-6">
      <figure className="dark:bg-cardColorDark rounded p-5 m-7 mt-12 -mb-2 border-[0.5px] border-borderCardColor">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-white m-0">About mathRanks</h1>
          <p className="text-base font-semibold font-sans dark:text-cardPTextDark">
            mathRanks is a free online math competition platform designed to
            prepare students for their local math competitions and olympiads. We
            carefully collect and create math problems to emulate common math
            competitions and setup an environment for competitors to test their
            skills in.
          </p>
        </div>
      </figure>
      <figure className="dark:bg-cardColorDark rounded p-5 m-7 -mb-2 border-[0.5px] border-borderCardColor">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-white m-0">
            Participating in Contests
          </h1>
          <p className="text-base font-semibold font-sans dark:text-cardPTextDark">
            Create an account, show up at the designated time, and compete! We
            do not punish users for entering the competition and not making any
            answer submissions. However, if you make any answer submission in
            the contest, that contest will be evaluated and effect your rating.
            Each question will be allotted points and those will determine the
            standing at the end of the contest. Ratings will be adjusted after
            standings are determined.
          </p>
        </div>
      </figure>
      <figure className="dark:bg-cardColorDark rounded p-5 m-7 -mb-2 border-[0.5px] border-borderCardColor">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-white m-0">Future</h1>
          <p className="text-base font-semibold font-sans dark:text-cardPTextDark ">
            mathRanks is growing and ever changing. In the future, we plan to
            implement more community-focused features, refine our scoring and
            point system, and more. If you have any insight, or would like to
            help, contact us at contact@mathranks.net.
          </p>
        </div>
      </figure>
      <figure className="dark:bg-cardColorDark rounded p-5 m-7 border-[0.5px] border-borderCardColor">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-white m-0">Ranking</h1>
          <Link href="https://github.com/EbTech/Elo-MMR/blob/master/paper/EloMMR.pdf">
            <p className="dark:text-linkColorDark font-bold text-base font-sans">
              Elo-MMR System
            </p>
          </Link>
        </div>
      </figure>
    </div>
  );
}
