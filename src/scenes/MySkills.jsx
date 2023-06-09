import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="cars" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            Electric <span className="text-red">Cars</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
          Model S is a Dual Motor All-Wheel Drive, Lowered Sedan EV Car, it has range of 405 miles,
           power of 670 hp and it can go from 0 – 60 mph in about 3.1 seconds.
           The S- Plaid edition of this car gives more power, speed and less acceleration time but at a cost of reduced range.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10 before:left-1/2 before:content-vehical1  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          
          <p className="mt-5">
          Model Y is a Dual Motor AWD Compact SUV EV Car, its Long-Range version has range of 330 miles and 
          it can go from 0 – 60 mph in about 4.8 seconds.
           It has two other variants, Performance and All-Wheel Drive.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 before:left-1/2 before:content-vehical2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          
          <p className="mt-5">
          Model 3 is a Dual Motor Compact Sedan EV Car, its Long-Range AWD version has range of 325+ miles and
           it can go from 0 – 60 mph in about 4.2 seconds. It has two other variants, Performance AWD and 
           Rear-Wheel Drive. 
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 before:left-1/2 before:content-vehical3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
         
          <p className="mt-5">
          Model X is AWD SUV EV Car, its Dual Motor has range of 348 miles, power of 670hp and it can go from 0 – 60 mph in 3.8 seconds. 
          Its Tri Motor Variant (X-Plaid) has range of 333 miles, power of 1020hp and acceleration of 2.5 seconds.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
