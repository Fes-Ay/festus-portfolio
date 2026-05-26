import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaGoogleScholar } from "react-icons/fa6";
import Footer from "@/components/footer/Footer";
import Publication from "@/components/publication/Publication";

const isProd = process.env.NODE_ENV === 'production';
const prefix = isProd ? '/festus-portfolio' : '';

export default function Home() {
  return (
    <div className="w-full h-full bg-gray-950 mx-auto min-h-screen flex flex-col items-center">
      <div className="w-full mx-auto min-h-screen flex flex-col items-center">
        <Navbar />
        <hr className="w-full h-0.5 border-gray-800 mb-4" />
        <main className="max-w-[1260px] w-full mt-6 px-4 flex flex-col sm:grid sm:grid-cols-8 sm:gap-6 items-start">
          <div className="col-span-2 mb-6 sm:px-0 px-6 flex flex-col items-center sm:items-start">
            <Image
              src={`${prefix}/images/headshot.jpg`}
              alt="Festus Basimtaal Ayembilla"
              height={160}
              width={160}
              className="rounded-full object-cover"
            />
            <h2 className="text-xl font-semibold mt-4">Festus Basimtaal Ayembilla</h2>
            <p className="text-md text-gray-600 text-left mt-1">MSc Student</p>
            <p className="text-md text-gray-600">
              Chungbuk National University
            </p>

            <div className="socials text-left mt-2 flex items-center gap-6 sm:block">
              {/* Email */}
              <a
                href="mailto:festusayembilla@gmail.com"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <MdEmail className="inline mr-2" size={16} />
                Email
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/festus-basimtaal-ayembilla"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <BsLinkedin className="inline mr-2" size={16} />
                LinkedIn
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Fes-Ay"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <BsGithub className="inline mr-2" size={16} />
                GitHub
              </a>
              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?hl=en&user=mEkqb1QAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-400 hover:underline text-sm flex items-center my-2"
              >
                <FaGoogleScholar className="inline mr-2" size={16} />
                Google Scholar
              </a>
            </div>
          </div>

          <section className="col-span-6 flex flex-col items-start px-4">
            {/* About Me */}
            <section className="w-full mb-12" id="about">
              <h2 className="text-3xl font-semibold mb-4">About Me</h2>
              <div className="space-y-4 leading-relaxed text-justify">
                <p className="text-justify">
                  I am an <strong>MSc student in Architectural Engineering</strong> at{" "}
                  <strong>Chungbuk National University</strong>, South Korea, where I
                  serve as a Graduate Research Assistant at the{" "}
                  <strong>Smart Constructions and Systems Laboratory</strong> under the
                  supervision of{" "}
                  <strong>Prof. Minkoo Kim</strong>. My research lies at the intersection
                  of <strong>Scan-to-BIM</strong>, <strong>3D Point Cloud Processing</strong>,
                  and <strong>Construction Robotics</strong>.
                </p>
                <p className="text-justify">
                  My work focuses on developing deep learning pipelines and synthetic data
                  strategies to improve the accuracy and generalization of{" "}
                  <strong>semantic segmentation</strong> models for MEP (Mechanical,
                  Electrical, and Plumbing) point clouds. I also investigate{" "}
                  <strong>multi-robot coordination</strong> frameworks that integrate
                  BIM-anchored spatial maps with autonomous indoor navigation for
                  construction and facility management.
                </p>
                <p className="text-justify">
                  Prior to joining CBNU, I completed a{" "}
                  <strong>BSc in Civil Engineering</strong> from the{" "}
                  <strong>University of Energy and Natural Resources (UENR)</strong>, Ghana,
                  and gained practical experience as a part-time engineer and teaching
                  assistant in structural and architectural design.
                </p>
              </div>

              <div className="">
                <h3 className="text-xl font-semibold mb-4 mt-10">
                  Research Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Scan-to-BIM",
                    "3D Point Cloud Processing",
                    "Construction Robotics",
                    "Digital Twins",
                    "Computer Vision",
                    "Multi-Robot Coordination",
                  ].map((area) => (
                    <span
                      key={area}
                      className="px-4 py-1.5 bg-gray-900 font-medium rounded-full text-sm shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Publications Section */}
            <section className="my-12 w-full" id="publications">
              <h2 className="text-3xl font-semibold mb-10 text-white">
                Publications
              </h2>

              <div className="flex flex-col">
                <Publication
                  date="2026"
                  title="Improving Cross-Facility Generalization of MEP Semantic Segmentation Using Independent-Source Synthetic Point Clouds"
                  authors="AYEMBILLA, F. B., & Kim, M. K."
                  venue="Automation in Construction"
                  status="Under Review"
                />
                <Publication
                  date="2026"
                  title="Automated Shape-Aware Dimensional Classification and Semantic-Instance Segmentation of Steel Structures from Occluded Point Cloud Data"
                  authors="Rajendran, M., Ayembilla, F.B., Sim, S. H., Kim, M. K., & Yi, C. Y."
                  venue="Automation in Construction"
                  status="Under Review"
                />
                <Publication
                  date="CIB W78 2026"
                  title="GeoAugPT: Deterministic Structural Priors for Indoor Point Cloud Semantic Segmentation in Scan-to-BIM Workflows"
                  authors="Ayembilla, F.B., & Kim, M. K."
                  venue="CIB W78 2026 International Conference on IT in Construction"
                  status="Submitted"
                />
                <Publication
                  date="ISARC 2026"
                  title="An Automated Pipeline for Generating a Multi-Layered Spatial Map for Indoor Robot Navigation from BIM Data"
                  authors="Ayembilla F.B., KIM T., KIM M., Seo J., Jung In KIM."
                  venue="International Symposium on Automation and Robotics in Construction (ISARC 2026)"
                  status="Accepted"
                />
                <Publication
                  date="i3CE 2026"
                  title="Geometric-Based Dimensional Classification of Steel Structures with Semantic and Instance Segmentation from 3D Point Cloud Data"
                  authors="Rajendran, M., Ayembilla, F.B., Sim, S. H., & Kim, M. K."
                  venue="International Conference on Computing in Civil Engineering (i3CE 2026, South Korea)"
                  status="Accepted"
                />
                <Publication
                  date="FITAT 2025"
                  title="Completing Occluded Indoor Point Clouds for Enhanced Semantic Segmentation in Scan-to-BIM Workflows"
                  authors="Dao H., Ayembilla, F.B., Sim, S., Won, J., Kang, M., Yoon, S., Kim, H., Kim M."
                  venue="FITAT 2025, Ho Chi Minh, Vietnam"
                  status="Accepted"
                />
                <Publication
                  date="Nov 2025"
                  title="Improving Generalization of Deep Learning Models in MEP Point Cloud Segmentation Through Synthetic Data Augmentation"
                  authors="AYEMBILLA, F. B., RAJENDRAN, M., & Min-Koo, K. I. M."
                  venue="11th International Conference on Construction Engineering and Project Management (ICCEPM 2025), Jeju, South Korea"
                  paperUrl="https://doi.org/10.6106/ICCEPM.2025.0306"
                />
              </div>
            </section>

            {/* Projects Section */}
            <section className="my-12 mb-24 w-full" id="projects">
              <h2 className="text-3xl font-semibold mb-10">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Robot-Adaptive Building */}
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">Robot-Adaptive Building</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">July 2025 – Present</p>
                  <p className="text-sm text-gray-300 mb-2">
                    Developing frameworks that enable multiple heterogeneous robots to
                    operate within a shared BIM-anchored spatial environment for
                    construction and facility management. Includes an IFC-to-robot
                    conversion pipeline generating maps compatible with ROS2 navigation.
                    Current work investigates a semantic segmentation approach for indoor
                    structural components (GeoAugPT) to facilitate automated Scan-to-BIM
                    reconstruction.
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools: BIM, IFC, ROS2, Gazebo, Python, GLB/JSON/PGM
                  </p>
                </div>

                {/* TLS Simulation Framework */}
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">Blender-Based TLS Simulation</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">2024 – 2025</p>
                  <p className="text-sm text-gray-300 mb-2">
                    A Blender-based Terrestrial Laser Scanner (TLS) simulation framework
                    for generating occlusion-aware MEP point clouds with configurable beam
                    divergence, incident angle, and realistic noise. Exports XYZ,
                    normals, and semantic labels for deep learning training.
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools: Blender, Python, PyTorch, Open3D, CloudCompare
                  </p>
                </div>

                {/* MEP Segmentation */}
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">MEP Point Cloud Segmentation</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">2024 – Present</p>
                  <p className="text-sm text-gray-300 mb-2">
                    Investigating the effects of synthetic data generation and geometry
                    completion (GANs and diffusion models) on segmentation accuracy of
                    deep learning architectures such as ResPointNet++ for MEP systems.
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools: Python, PyTorch, ResPointNet++, Open3D, MATLAB
                  </p>
                </div>

                {/* 50-Unit Apartment Complex */}
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">50-Unit Residential Estate Design</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Jan – Apr 2022 · UENR</p>
                  <p className="text-sm text-gray-300 mb-2">
                    Designed architectural and structural drawings for a 50-unit
                    residential estate — including apartments, a clinic, a supermarket,
                    and recreational facilities — for the University of Energy and
                    Natural Resources.
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    Tools: Autodesk Revit, AutoCAD Architecture, Lumion 12.0
                  </p>
                </div>
              </div>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
