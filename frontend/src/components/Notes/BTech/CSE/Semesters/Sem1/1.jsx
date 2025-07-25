import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Semester1() {
  const [selectedSubject, setSelectedSubject] = useState("Applied Physics 1");
  const [activeTab, setActiveTab] = useState("Syllabus");
  const { semesterId } = useParams();
  const navigate = useNavigate();

  const semesterData = {
    subjects: [
      "Applied Physics 1",
      "Applied Mathematics 1",
      "Applied Chemistry",
      "Manufacturing Processes",
      "Communication Skills",
      "Engineering Graphics",
      "Engineering Mechanics",
      "Electrical Science",
      "Environmental Science",
      "Human Values and Professional Ethics",
      "Indian Constitution",
      "Programming in C",
    ],
    units: {
      "Applied Physics 1": [
        {
          title: "UNIT - I",
          desc: "Introduction to Thermodynamics: Fundamental Ideas of Thermodynamics, The Continuum Model, The Concept of a 'System', 'State', 'Equilibrium', 'Process'. Equations of state, Heat, Zeroth Law of Thermodynamics, Work, first and second laws of thermodynamics, entropy",
        },
        {
          title: "UNIT - II",
          desc: "Waves and Oscillations: Wave motion, simple harmonic motion, wave equation, superposition principle. Introduction to Electromagnetic Theory: Maxwell's equations. work done by the electromagnetic field, Poynting's theorem, Momentum, Angular momentum in electromagnetic fields, Electromagnetic waves: the wave equation, plane electromagnetic waves, energy carried by electromagnetic waves",
        },
        {
          title: "UNIT - III",
          desc: "Interference: Interference by division of wave front (Young's double slit experiment, Fresnel's biprism), interference by division of amplitude (thin films, Newton's rings, Michelson's interferometer), Coherence and coherent sources, Diffraction: Fraunhofer and Fresnel diffraction; Fraunhofer diffraction for Single slit, double slit, and N-slit (diffraction grating), Fraunhofer diffraction from a circular aperture, resolving power and dispersive power of a grating, Rayleigh criterion, resolving power of optical instruments, Polarization: Introduction to polarization, Brewster's law, Malu's law, Nicol prism, double refraction, quarter-wave and half-wave plates, optical activity, specific rotation, Laurent half shade polarimeter.",
        },
        {
          title: "UNIT - IV",
          desc: "Theory of relativity: The Michelson-Morley Experiment and the speed of light; Absolute and Inertial frames of reference, Galilean transformations, the postulates of the special theory of relativity, Lorentz transformations, time dilation, length contraction, velocity addition, mass energy equivalence. Invariance of Maxwell's equations under Lorentz Transformation. Introduction to Laser Physics: Introduction, coherence, Einstein A and B coefficients, population inversion, basic principle and operation of a laser, the He-Ne laser and the Ruby laser",
        },
      ],
      "Applied Mathematics 1": [
        {
          title: "UNIT - I",
          desc: "Partial derivatives, Chain rule, Differentiation of Implicit functions, Exact differentials, Maxima, Minima and saddle points, Method of Lagrange multipliers, Differentiation under Integral sign, Jacobians and transformations of coordinates.",
        },
        {
          title: "UNIT - II",
          desc: "Ordinary Differential Equations (ODEs): Basic Concepts, Geometric Meaning of y'= f(x, y), Direction Fields, Euler's Method, Separable ODEs, Exact ODEs, Integrating Factors, Linear ODEs, Bernoulli Equation, Population Dynamics, Orthogonal Trajectories, Homogeneous Linear ODEs with Constant Coefficients, Differential Operators, Modeling of Free Oscillations of a Mass-Spring System, Euler–Cauchy Equations, Wronskian, Nonhomogeneous ODEs, Solution by Variation of Parameters, Power Series Method for solution of ODEs, Legendre's Equation, Legendre Polynomials, Bessel's Equation, Bessels's functions Jn(x) and Yn(x), Gamma Function",
        },
        {
          title: "UNIT - III",
          desc: "Linear Algebra: Matrices and Determinants, Gauss Elimination, Linear Independence, Rank of a Matrix, Vector Space, Solutions of Linear Systems and concept of Existence, Uniqueness, Determinants, Cramer's Rule, Gauss–Jordan Elimination, The Matrix Eigenvalue Problem, Determining Eigenvalues and Eigenvectors, Symmetric, Skew-Symmetric, and Orthogonal Matrices, Eigenbases, Diagonalization, Quadratic Forms, Cayley – Hamilton Theorem (without proof)",
        },
        {
          title: "UNIT - IV",
          desc: "Vector Calculus: Vector and Scalar Functions and Their Fields, Derivatives, Curves, Arc Length, Curvature, Torsion, Gradient of a Scalar Field, Directional Derivative, Divergence of a Vector Field, Curl of a Vector Field, Line Integrals, Path Independence of Line Integrals, Double Integrals, Green's Theorem in the Plane, Surfaces for Surface Integrals, Surface Integrals, Triple Integrals, Stokes Theorem, Divergence Theorem of Gauss",
        },
      ],
      "Applied Chemistry": [
        {
          title: "UNIT - I",
          desc: "Fuels: Classification and Characteristics of fuels, Calorific values, Comparison between solid, liquid and gaseous fuels, calorific values of fuels, determination of calorific values using Bomb calorimeter, Boy's calorimeter, theoretical calculation of calorific value using Dulong formula and numericals of Calorific values. Types of fuels: - Solid: Coal, proximate and ultimate analysis of coal and numericals, carbonisation of coal in Otto-Hoffman oven with recovery of by-products, metallurgical coke; Liquid: Petroleum products --- refining, cracking-thermal and catalytic, knocking characteristics, Octane and Cetane rating; Gaseous: Natural Gas (NG), CNG, LPG, Coal gas, Oil gas, Producer gas, Water gas; Combustion of fuels numericals.",
        },
        {
          title: "UNIT - II",
          desc: "Phase rule: Terms used in Gibb's Phase rule, phase diagram and its applications for study of one-component systems: Water and Sulphur and two-component systems: Lead-Silver and Zinc-Magnesium. Polymers: Classification, functionality and their types; Plastics: Synthesis (reactions) and properties of Polyethylene Plastics (Addition polymers) ---low-density polyethene (LDPE), high-density polyethylene(HDPE), linear low density polyethylene(LLDPE) and ultra-high molecular weight polyethylene (UHMWPE); Vinyl Plastics (Condensation polymers) - Nylons, Phenol-formaldehyde resins(Bakelite) and Glyptal; Speciality Polymers: Engineering thermoplastics, Conducting polymers, Electroluminescent polymers, liquid crystalline polymers and biodegradable polymers.",
        },
        {
          title: "UNIT - III",
          desc: "Water: Introduction, water quality standards, physical, chemical and biological characteristics; hardness of water, disadvantages of hardness, determination of hardness (EDTA method) and related numerical questions. Alkalinity and its determination; Boiler problems with hard water and their prevention: Scale and sludge formation, boiler corrosion, caustic embrittlement, priming and foaming, boiler water treatment - internal or in-situ: carbonate and phosphate conditioning, colloidal and Calgon conditioning; external treatment: (a) Lime soda process and related numericals (b) Zeolite process and numericals, (c) Ion-exchange process. Municipal water supply - its treatment and disinfection using break -point chlorination. Desalination, Reverse Osmosis, Electrodialysis and defluoridation of water.",
        },
        {
          title: "UNIT - IV",
          desc: "Corrosion and its Control: Definition, effects, theory (mechanisms): dry/chemical, wet/electrochemical corrosion, Pilling-Bedworth ratio; Types of corrosion: Galvanic corrosion, Soil corrosion, Pitting corrosion, Concentration cell or Differential Aeration corrosion, Stress corrosion; Mechanism of rusting of iron, Passivity. Factors influencing corrosion; protective measures: galvanization, tinning, cathodic protection, sacrificial anodic protection; electroplating and prevention of corrosion through material selection and design. Green Technology and Green Chemistry Twelve Principles of Green Chemistry, Zero Waste Technology, Atom economy, Use of alternative feedstock, innocuous reagents, alternative solvents, designing alternative reaction methodology, minimising energy consumption. Nano Chemistry: Nanomaterials: Properties, synthesis and surface characterization techniques BET and TEM and applications.",
        },
      ],
      "Manufacturing Processes": [
        {
          title: "UNIT - I",
          desc: "Definition of manufacturing, Importance of manufacturing towards technological and social economic development, Classification of manufacturing processes, Properties of materials. Metal Casting Processes: Sand casting, Sand moulds, Type of patterns, Pattern materials, Pattern allowances, Types of Moulding sand and their Properties, Core making, Elements of gating system, Description and operation of cupola, Working principle of Special casting processes - Shell casting, Pressure die casting, Centrifugal casting, Casting defects.",
        },
        {
          title: "UNIT - II",
          desc: "Joining Processes: Welding principles, classification of welding processes, Fusion welding, Gas welding, Equipments used, Filler and Flux materials, Electric arc welding, Gas metal arc welding, Submerged arc welding, Electro slag welding, TIG and MIG welding process, resistance welding, welding defects",
        },
        {
          title: "UNIT - III",
          desc: "Deformation Processes: Hot working and cold working of metals, Forging processes, Open and closed die forging process, Typical forging operations, Rolling of metals, Principle of rod and wire drawing, Tube drawing, Principle of Extrusion, Types of Extrusion, Hot and Cold extrusion, Sheet metal characteristics - Typical shearing operations, bending and drawing operations, Stretch forming operations, Metal spinning",
        },
        {
          title: "UNIT - IV",
          desc: "Powder Metallurgy: Introduction of powder metallurgy process, powder production, blending, compaction, sintering, Manufacturing Of Plastic Components: Types of plastics, Characteristics of the forming and shaping processes, Moulding of Thermoplastics, Injection moulding, Blow moulding, Rotational moulding, Film blowing, Extrusion, Thermoforming, Moulding of thermosets- Compression moulding, Transfer moulding, Bonding of Thermoplastics.",
        },
      ],
      "Communication Skills": [
        {
          title: "UNIT - I",
          desc: "Role and Importance of Communications, Attributes of Communications, Verbal and Non-Verbal Communications, Verbal Communications Skills, Non-verbal Communication Methods, Body Language, Barriers to Communications, Socio-psychological barriers, Inter-Cultural barriers, Overcoming barriers, Communication Mediums: Characterization and Choice of medium, Effective Communication: Correctness, Clarity, Conciseness, Courtesy, Group Communication: Meetings (types, purpose), Group Discussions, Conduct of Meeting, Participant Role, Making Presentations.",
        },
        {
          title: "UNIT - II",
          desc: "Spoken and Written English: Attributes of spoken and written communication, Formal & Informal Communication, Variation in between Indian, British and American English. Etiquette and Manners: Personal Behaviour, Greetings, Introductions, Telephone Etiquette. Vocabulary Development: Dictionaries and Thesaurus, Words often confused, generally used one word substitutions, Comprehension.",
        },
        {
          title: "UNIT - III",
          desc: "Letter writing: Planning the message, Planning Content, Structure, Language use, Layout, enquires and replies, asking for or giving quotations, Bargaining letters, Seller’s reply, etc.; Complaints and Replies; Memos, Circulars and notices; Paragraph Writing, Writing Scientific and Technical Reports: Types, Structure, Drafting and Delivering a Speech: Understanding the Environment, Understanding the Audience, Text preparing, Composition, Practicing, Commemorative Speeches, Welcome and Introduction, Farewell and Send-offs, Condolence",
        },
        {
          title: "UNIT - IV",
          desc: "Articles: Indefinite, Definite; Tenses: Present, Past, Future, Perfect (Present, Past and Future), Tenses in conditional sentences; Active and Passive Voice: Formation, conversion; Direct and Indirect Speech, Degrees of Comparison, Common errors, Concepts of Learning and Listening",
        },
      ],
      "Engineering Graphics": [
        {
          title: "UNIT - I",
          desc: "Introduction: Engineering Graphics/Technical Drawing, Introduction to drawing equipments and use of instruments, Conventions in drawing practice. Types of lines and their uses, BIS codes for lines, technical lettering as per BIS codes, Introduction to dimensioning, Types, Concepts of scale drawing, Types of scales Theory of Projections: Theory of projections, Perspective, Orthographic, System of orthographic projection: in reference to quadrants, Projection of Points, Projection in different quadrants, Projection of point on auxiliary planes, Distance between two points, Illustration through simple problems.",
        },
        {
          title: "UNIT - II",
          desc: "Projection of Lines: Line Parallel to both H.P. and V.P., Parallel to one and inclined to other, Other typical cases: three view projection of straight lines, true length and angle orientation of straight line: rotation method, Trapezoidal method and auxiliary plane method, traces of line.",
        },
        {
          title: "UNIT - III",
          desc: "Projection of Planes: Projection of Planes Parallel to one and perpendicular to other, Perpendicular to one and inclined to other, Inclined to both reference planes, Plane oblique to reference planes, traces of planes, Planes Other than the Reference Planes: Introduction of other planes (perpendicular and oblique), their traces, inclinations etc., projections of points and lines lying in the planes, conversion of oblique plane into auxiliary plane and solution of related problems.",
        },
        {
          title: "UNIT - IV",
          desc: "Projection of Solids: Projection of solids in first or third quadrant, Axis parallel to one and perpendicular to other, Axis parallel to one inclined to other, Axis inclined to both the principal plane, Axis perpendicular to profile plane and parallel to both H.P. and V.P., Visible and invisible details in the projection, Use of rotation and auxiliary plane method, Development of Surface: Purpose of development, Parallel line, radial line and triangulation method, Development of prism, cylinder, cone and pyramid surface for both right angled and oblique solids, Development of surface.",
        },
      ],
      "Engineering Mechanics": [
        {
          title: "UNIT - I",
          desc: "Force System: Introduction, force, principle of transmissibility of force, resultant of a force system, resolution of a force, moment of force about a line, Varigon’s theorem, couple, resolution of force into force and a couple, properties of couple and their application to engineering problems. Equilibrium: Force body diagram, equations of equilibrium and their applications to engineering problems, equilibrium of two force and three force members. Distributed Forces: Determination of center of gravity, center of mass and centroid by direct integration and by the method of composite bodies, mass moment of inertia and area moment of inertia by direct integration and composite bodies method, radius of gyration, parallel axis theorem, polar moment of inertial.",
        },
        {
          title: "UNIT - II",
          desc: "Structure: Plane truss, perfect and imperfect truss, assumption in the truss analysis, analysis of perfect plane trusses by the method of joints, method of section and graphical method. Friction: Static and Kinetic friction, laws of dry friction, co-efficient of friction, angle of friction, angle of repose, cone of friction, frictional lock, friction in flat pivot and collar bearing, friction in flat belts.",
        },
        {
          title: "UNIT - III",
          desc: "Kinematics of Particles: Rectilinear motion, plane curvilinear motion, rectangular coordinates, normal and tangential coordinates. Kinetics of Particles: Equation of motion, rectilinear motion and curvilinear motion, work-energy equation, conservation of energy, concept of impulse and momentum, conservation of momentum, impact of bodies, co-efficient of restitution, loss of energy during impact.",
        },
        {
          title: "UNIT - IV",
          desc: "Kinematics of Rigid Bodies: Concept of rigid body, types of rigid body motion, absolute motion, introduction to relative velocity, relative acceleration (Corioli’s component excluded) and instantaneous center of zero velocity, Velocity and acceleration. Kinetics of Rigid Bodies: Equation of motion, translatory motion and fixed axis rotation, application of work energy principles to rigid bodies conservation of energy. Beam: Introduction, types of loading, methods for the reactions of a beam, space diagram, types of end supports, beams subjected to couple.",
        },
      ],
      "Electrical Science": [
        {
          title: "UNIT - I",
          desc: "DC Circuits: Passive circuit components, Basic laws of Electrical Engineering, Temperature Resistance Coefficients, voltage and current sources, Series and parallel circuits, power and energy, Kirchhoff’s Laws, Nodal & Mesh Analysis, delta-star transformation, superposition theorem, Thevenin’s theorem, Norton’s theorem, maximum power transfer theorem, Time domain analysis of first Order RC & LC circuits.",
        },
        {
          title: "UNIT - II",
          desc: "AC Circuits: Representation of sinusoidal waveforms, peak and rms values, phasor representation, real power, reactive power, apparent power, power factor, Analysis of single-phase ac circuits consisting of R, L, C, RL, RC, RLC combinations (series and parallel), resonance, Three phase balanced circuits, voltage and current relations in star and delta connections.",
        },
        {
          title: "UNIT - III",
          desc: "D. C. Generators & Motors: Principle of operation of Generators & Motors, Speed Control of shunt motors, Flux control, Rheostatic control, voltage control, Speed control of series motors, A. C. Generators & Motors: Principle of operation, Revolving Magnetic field, Squirrel cage and phase wound rotor, Starting of Induction motors, Direct on line and Star Delta starters, Synchronous machines.",
        },
        {
          title: "UNIT - IV",
          desc: "Transformers: Construction and principle of operation, equivalent circuit, losses in transformers, regulation and efficiency, Auto-transformer and three-phase transformer connections, Measuring Instruments: Electromagnetism, Different Torques in Indicating instruments, Moving Iron Instruments: Construction & Principle, Attraction and Repulsion type, Moving Coil instruments: Permanent Magnet type, Dynamometer type Instruments.",
        },
      ],
      "Environmental Science": [
        {
          title: "UNIT - I",
          desc: "Fundamentals: The Multidisciplinary nature of environmental studies: Definition, components, scope and importance, need for public awareness; Natural Resources. Ecosystems: Concept, Structure and function of an ecosystem, Types, Functional Components, Different ecosystems, biogeochemical cycles. Biodiversity: Introduction to biodiversity, biogeographical classification, India as a mega diversity nation, endangered and endemic species of India, threats to biodiversity and conservation of biodiversity. Bioprospecting and Biopiracy",
        },
        {
          title: "UNIT - II",
          desc: "Environmental Pollution: (a) Air Pollution: Source, Types, effects on biosphere and Meterology, Air Quality, Control. (b) Water Pollution: Types and Sources. (c) Soil Pollution: Types and Control. (d) Noise Pollution: Effect, Control (e) Thermal Pollution. (f) Radiation Pollution (g) Solid waste Management, (h) Pollution Prevention, (i) Disaster Management",
        },
        {
          title: "UNIT - III",
          desc: "Social Issues and Environment: Concept of Sustainable Development; Urban problem related to energy; Water Conservation; Wasteland reclamation; Resettlement and Rehabilitation; Climate Change; Nuclear Accidents; Consumerism and Waste Products; Laws related to Environment, Pollution, Forest and Wild life; Environmental Impact Assessment.",
        },
        {
          title: "UNIT - IV",
          desc: "Human Population and Environment: Population Growth, Human Rights, Family Welfare Programmes, Environment and Human Health, HIV/AIDS, Women and Child Welfare, Role of IT.",
        },
      ],
      "Human Values and Professional Ethics": [
        {
          title: "UNIT - I",
          desc: "Human Values: Morals, Values, Ethics, Integrity, Work ethics, Service learning, Virtues, Respect for others, Living peacefully, Caring, Sharing, Honesty, Courage, Valuing time, Cooperation, Commitment, Empathy, Self-confidence, Challenges in the workplace, Spirituality",
        },
        {
          title: "UNIT - II",
          desc: "Engineering Ethics: Senses of engineering ethics, Variety of moral issues, Types of inquiries, Moral dilemma, Moral autonomy, Moral development (theories), Consensus and controversy, Profession, Models of professional roles, Responsibility, Theories about right action (Ethical theories), Self-control, Self-interest, Customs, Religion, Self-respect, Case study: Choice of the theory Engineering as experimentation, Engineers as responsible experimenters, Codes of ethics, Industrial standards, A balanced outlook on law, Case study: The challenger",
        },
        {
          title: "UNIT - III",
          desc: "Safety definition, Safety and risk, Risk analysis, Assessment of safety and risk, Safe exit, Risk-benefit analysis, Safety lessons from ‘the challenger’, Case study: Power plants, Collegiality and loyalty, Collective bargaining, Confidentiality, Conflict of interests, Occupational crime, Human rights, Employee rights, Whistleblowing, Intellectual property rights.",
        },
        {
          title: "UNIT - IV",
          desc: "Globalization, Multinational corporations, Environmental ethics, Computer ethics, Weapons development, Engineers as managers, Consulting engineers, Engineers as expert witness, Engineers as advisors in planning and policymaking, Moral leadership, Codes of ethics, Engineering council of India, Codes of ethics in Business Organizations",
        },
      ],
      "Indian Constitution": [
        {
          title: "UNIT - I",
          desc: "Introduction to Constitution of India: Definition, Source and Framing of the Constitution of India. Salient Features of the Indian Constitution. Preamble of the Constitution.",
        },
        {
          title: "UNIT - II",
          desc: "Fundamental Rights and Duties: Rights To Equality (Article 14-18), Rights to Freedom (Article 19-22), Right against Exploitation (Article 23-24), Rights to Religion and Cultural and Educational Rights of Minorities (Article 25-30). The Directive Principles of State Policy – Its significance and application. Fundamental Duties – Necessary obligations and its nature, legal status and significance.",
        },
        {
          title: "UNIT - III",
          desc: "Executives and Judiciary: Office of President, Vice President and Governor: Power and Functions, Parliament, Emergency Provisions, President Rule; Union Judiciary: Appointment of Judges, Jurisdiction of the Supreme Court, State Judiciary: Power and functions, Writ Jurisdiction.",
        },
        {
          title: "UNIT - IV",
          desc: "Centre-States Relation: Is Indian Constitution Federal in Nature, Legislative relations between Union and States, Administrative Relations between Union and States, Financial Relations between Union and States.",
        },
      ],
      "Programming in C": [
        {
          title: "UNIT - I",
          desc: "Introduction to Programming: Computer system, components of a computer system, computing environments, computer languages, creating and running programs, Preprocessor, Compilation process, role of linker, idea of invocation and execution of a programme. Algorithms: Representation using flowcharts, pseudocode. Introduction to C language: History of C, basic structure of C programs, process of compiling and running a C program, C tokens, keywords, identifiers, constants, strings, special symbols, variables, data types, I/O statements. Interconversion of variables. Operators and expressions: Operators, arithmetic, relational and logical, assignment operators, increment and decrement operators, bitwise and conditional operators, special operators, operator precedence and associativity, evaluation of expressions, type conversions in expressions.",
        },
        {
          title: "UNIT - II",
          desc: "Control structures: Decision statements; if and switch statement; Loop control statements: while, for and do while loops, jump statements, break, continue, goto statements. Arrays: Concepts, One dimensional array, declaration and initialization of one dimensional arrays, two dimensional arrays, initialization and accessing, multi dimensional arrays. Functions: User defined and built-in Functions, storage classes, Parameter passing in functions, call by value, Passing arrays to functions: idea of call by reference, Recursion. Strings: Arrays of characters, variable length character strings, inputting character strings, character library functions, string handling functions.",
        },
        {
          title: "UNIT - III",
          desc: "Pointers: Pointer basics, pointer arithmetic, pointers to pointers, generic pointers, array of pointers, functions returning pointers, Dynamic memory allocation. Pointers to functions. Pointers and Strings Structures and unions: Structure definition, initialization, accessing structures, nested structures, arrays of structures, structures and functions, self referential structures, unions, typedef, enumerations. File handling: command line arguments, File modes, basic file operations read, write and append. Scope and life of variables, multi-file programming.",
        },
        {
          title: "UNIT - IV",
          desc: "C99 extensions. 'C' Standard Libraries: stdio.h, stdlib.h, assert.h, math.h, time.h, ctype.h, setjmp.h, string.h, stdarg.h, unistd.h Basic Algorithms: Finding Factorial, Fibonacci series, Linear and Binary Searching, Basic Sorting Algorithms- Bubble sort, Insertion sort and Selection sort. Find the square root of a number, array order reversal, reversal of a string",
        },
      ],
    },
  };

  // PDF data for each subject and unit
  const pdfData = {
    "Applied Physics 1": {
      "UNIT - I": [
        { name: "Thermodynamics Introduction", path: "/pdfs/cse/sem1/applied-physics-1/unit1/thermodynamics-intro.html" },
        { name: "Heat and Work Problems", path: "/pdfs/cse/sem1/applied-physics-1/unit1/heat-work-problems.html" },
        { name: "Laws of Thermodynamics", path: "/pdfs/sample-note.html" },
        { name: "Entropy and Applications", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Waves and Oscillations", path: "/pdfs/cse/sem1/applied-physics-1/unit2/waves-oscillations.html" },
        { name: "Maxwell's Equations", path: "/pdfs/sample-note.html" },
        { name: "Electromagnetic Waves", path: "/pdfs/sample-note.html" },
        { name: "Poynting Theorem", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Interference and Diffraction", path: "/pdfs/cse/sem1/applied-physics-1/unit3/interference-diffraction.html" },
        { name: "Young's Double Slit", path: "/pdfs/sample-note.html" },
        { name: "Diffraction Theory", path: "/pdfs/sample-note.html" },
        { name: "Polarization of Light", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Relativity and Laser Physics", path: "/pdfs/cse/sem1/applied-physics-1/unit4/relativity-laser.html" },
        { name: "Lorentz Transformations", path: "/pdfs/sample-note.html" },
        { name: "Laser Physics", path: "/pdfs/sample-note.html" },
        { name: "Einstein Coefficients", path: "/pdfs/sample-note.html" }
      ]
    },
    "Applied Mathematics 1": {
      "UNIT - I": [
        { name: "Partial Derivatives", path: "/pdfs/cse/sem1/applied-mathematics-1/unit1/partial-derivatives.html" },
        { name: "Chain Rule Applications", path: "/pdfs/sample-note.html" },
        { name: "Jacobians", path: "/pdfs/sample-note.html" },
        { name: "Lagrange Multipliers", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Multiple Integrals", path: "/pdfs/sample-note.html" },
        { name: "Double Integrals", path: "/pdfs/sample-note.html" },
        { name: "Triple Integrals", path: "/pdfs/sample-note.html" },
        { name: "Change of Variables", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Vector Calculus", path: "/pdfs/sample-note.html" },
        { name: "Line Integrals", path: "/pdfs/sample-note.html" },
        { name: "Green's Theorem", path: "/pdfs/sample-note.html" },
        { name: "Divergence Theorem", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Fourier Series", path: "/pdfs/sample-note.html" },
        { name: "Complex Fourier", path: "/pdfs/sample-note.html" },
        { name: "Fourier Transform", path: "/pdfs/sample-note.html" },
        { name: "Applications", path: "/pdfs/sample-note.html" }
      ]
    },
    "Applied Chemistry": {
      "UNIT - I": [
        { name: "Fuels Classification", path: "/pdfs/sample-note.html" },
        { name: "Calorific Values", path: "/pdfs/sample-note.html" },
        { name: "Coal Analysis", path: "/pdfs/sample-note.html" },
        { name: "Petroleum Products", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Phase Rule", path: "/pdfs/sample-note.html" },
        { name: "Gibbs Phase Rule", path: "/pdfs/sample-note.html" },
        { name: "Polymers", path: "/pdfs/sample-note.html" },
        { name: "Plastics and Properties", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Water Quality", path: "/pdfs/sample-note.html" },
        { name: "Water Hardness", path: "/pdfs/sample-note.html" },
        { name: "Boiler Problems", path: "/pdfs/sample-note.html" },
        { name: "Water Treatment", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Corrosion Theory", path: "/pdfs/sample-note.html" },
        { name: "Corrosion Control", path: "/pdfs/sample-note.html" },
        { name: "Green Chemistry", path: "/pdfs/sample-note.html" },
        { name: "Nano Chemistry", path: "/pdfs/sample-note.html" }
      ]
    },
    "Manufacturing Processes": {
      "UNIT - I": [
        { name: "Manufacturing Overview", path: "/pdfs/sample-note.html" },
        { name: "Metal Casting", path: "/pdfs/sample-note.html" },
        { name: "Sand Casting", path: "/pdfs/sample-note.html" },
        { name: "Casting Defects", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Welding Principles", path: "/pdfs/sample-note.html" },
        { name: "Gas Welding", path: "/pdfs/sample-note.html" },
        { name: "Arc Welding", path: "/pdfs/sample-note.html" },
        { name: "TIG and MIG Welding", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Deformation Processes", path: "/pdfs/sample-note.html" },
        { name: "Forging Operations", path: "/pdfs/sample-note.html" },
        { name: "Rolling and Drawing", path: "/pdfs/sample-note.html" },
        { name: "Sheet Metal Work", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Powder Metallurgy", path: "/pdfs/sample-note.html" },
        { name: "Plastic Manufacturing", path: "/pdfs/sample-note.html" },
        { name: "Injection Molding", path: "/pdfs/sample-note.html" },
        { name: "Thermoforming", path: "/pdfs/sample-note.html" }
      ]
    },
    "Communication Skills": {
      "UNIT - I": [
        { name: "Communication Basics", path: "/pdfs/sample-note.html" },
        { name: "Verbal Communication", path: "/pdfs/sample-note.html" },
        { name: "Non-verbal Communication", path: "/pdfs/sample-note.html" },
        { name: "Group Discussions", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Spoken English", path: "/pdfs/sample-note.html" },
        { name: "Written English", path: "/pdfs/sample-note.html" },
        { name: "Etiquette and Manners", path: "/pdfs/sample-note.html" },
        { name: "Vocabulary Development", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Letter Writing", path: "/pdfs/sample-note.html" },
        { name: "Business Correspondence", path: "/pdfs/sample-note.html" },
        { name: "Technical Reports", path: "/pdfs/sample-note.html" },
        { name: "Speech Delivery", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Grammar Fundamentals", path: "/pdfs/sample-note.html" },
        { name: "Tenses and Voice", path: "/pdfs/sample-note.html" },
        { name: "Direct Indirect Speech", path: "/pdfs/sample-note.html" },
        { name: "Common Errors", path: "/pdfs/sample-note.html" }
      ]
    },
    "Engineering Graphics": {
      "UNIT - I": [
        { name: "Drawing Instruments", path: "/pdfs/sample-note.html" },
        { name: "Engineering Drawing", path: "/pdfs/sample-note.html" },
        { name: "Projection Theory", path: "/pdfs/sample-note.html" },
        { name: "Point Projections", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Line Projections", path: "/pdfs/sample-note.html" },
        { name: "True Length Methods", path: "/pdfs/sample-note.html" },
        { name: "Line Orientations", path: "/pdfs/sample-note.html" },
        { name: "Traces of Lines", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Plane Projections", path: "/pdfs/sample-note.html" },
        { name: "Plane Inclinations", path: "/pdfs/sample-note.html" },
        { name: "Auxiliary Planes", path: "/pdfs/sample-note.html" },
        { name: "Oblique Planes", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Solid Projections", path: "/pdfs/sample-note.html" },
        { name: "Prism and Pyramid", path: "/pdfs/sample-note.html" },
        { name: "Surface Development", path: "/pdfs/sample-note.html" },
        { name: "Development Methods", path: "/pdfs/sample-note.html" }
      ]
    },
    "Engineering Mechanics": {
      "UNIT - I": [
        { name: "Force Systems", path: "/pdfs/sample-note.html" },
        { name: "Equilibrium Conditions", path: "/pdfs/sample-note.html" },
        { name: "Distributed Forces", path: "/pdfs/sample-note.html" },
        { name: "Center of Gravity", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Truss Analysis", path: "/pdfs/sample-note.html" },
        { name: "Method of Joints", path: "/pdfs/sample-note.html" },
        { name: "Friction Laws", path: "/pdfs/sample-note.html" },
        { name: "Friction Applications", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Particle Kinematics", path: "/pdfs/sample-note.html" },
        { name: "Curvilinear Motion", path: "/pdfs/sample-note.html" },
        { name: "Particle Kinetics", path: "/pdfs/sample-note.html" },
        { name: "Work-Energy Theorem", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Rigid Body Kinematics", path: "/pdfs/sample-note.html" },
        { name: "Relative Motion", path: "/pdfs/sample-note.html" },
        { name: "Rigid Body Kinetics", path: "/pdfs/sample-note.html" },
        { name: "Beam Analysis", path: "/pdfs/sample-note.html" }
      ]
    },
    "Electrical Science": {
      "UNIT - I": [
        { name: "DC Circuit Analysis", path: "/pdfs/sample-note.html" },
        { name: "Kirchhoff's Laws", path: "/pdfs/sample-note.html" },
        { name: "Network Theorems", path: "/pdfs/sample-note.html" },
        { name: "First Order Circuits", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "AC Fundamentals", path: "/pdfs/sample-note.html" },
        { name: "Phasor Analysis", path: "/pdfs/sample-note.html" },
        { name: "AC Circuits", path: "/pdfs/sample-note.html" },
        { name: "Three Phase Systems", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "DC Machines", path: "/pdfs/sample-note.html" },
        { name: "Motor Speed Control", path: "/pdfs/sample-note.html" },
        { name: "AC Machines", path: "/pdfs/sample-note.html" },
        { name: "Induction Motors", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Transformers", path: "/pdfs/sample-note.html" },
        { name: "Transformer Analysis", path: "/pdfs/sample-note.html" },
        { name: "Measuring Instruments", path: "/pdfs/sample-note.html" },
        { name: "Instrument Types", path: "/pdfs/sample-note.html" }
      ]
    },
    "Environmental Science": {
      "UNIT - I": [
        { name: "Environmental Studies", path: "/pdfs/sample-note.html" },
        { name: "Natural Resources", path: "/pdfs/sample-note.html" },
        { name: "Ecosystem Structure", path: "/pdfs/sample-note.html" },
        { name: "Biodiversity", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Air Pollution", path: "/pdfs/sample-note.html" },
        { name: "Water Pollution", path: "/pdfs/sample-note.html" },
        { name: "Noise Pollution", path: "/pdfs/sample-note.html" },
        { name: "Waste Management", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Sustainable Development", path: "/pdfs/sample-note.html" },
        { name: "Urban Problems", path: "/pdfs/sample-note.html" },
        { name: "Climate Change", path: "/pdfs/sample-note.html" },
        { name: "Environmental Laws", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Population Growth", path: "/pdfs/sample-note.html" },
        { name: "Human Rights", path: "/pdfs/sample-note.html" },
        { name: "Health and Environment", path: "/pdfs/sample-note.html" },
        { name: "IT Role", path: "/pdfs/sample-note.html" }
      ]
    },
    "Human Values and Professional Ethics": {
      "UNIT - I": [
        { name: "Human Values", path: "/pdfs/sample-note.html" },
        { name: "Work Ethics", path: "/pdfs/sample-note.html" },
        { name: "Professional Virtues", path: "/pdfs/sample-note.html" },
        { name: "Workplace Challenges", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Engineering Ethics", path: "/pdfs/sample-note.html" },
        { name: "Moral Issues", path: "/pdfs/sample-note.html" },
        { name: "Professional Roles", path: "/pdfs/sample-note.html" },
        { name: "Ethical Theories", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Safety and Risk", path: "/pdfs/sample-note.html" },
        { name: "Employee Rights", path: "/pdfs/sample-note.html" },
        { name: "Whistleblowing", path: "/pdfs/sample-note.html" },
        { name: "Intellectual Property", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Globalization Ethics", path: "/pdfs/sample-note.html" },
        { name: "Computer Ethics", path: "/pdfs/sample-note.html" },
        { name: "Professional Codes", path: "/pdfs/sample-note.html" },
        { name: "Business Ethics", path: "/pdfs/sample-note.html" }
      ]
    },
    "Indian Constitution": {
      "UNIT - I": [
        { name: "Constitution Introduction", path: "/pdfs/sample-note.html" },
        { name: "Framing Process", path: "/pdfs/sample-note.html" },
        { name: "Salient Features", path: "/pdfs/sample-note.html" },
        { name: "Preamble", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Fundamental Rights", path: "/pdfs/sample-note.html" },
        { name: "Rights to Equality", path: "/pdfs/sample-note.html" },
        { name: "Directive Principles", path: "/pdfs/sample-note.html" },
        { name: "Fundamental Duties", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Executive Powers", path: "/pdfs/sample-note.html" },
        { name: "President and Governor", path: "/pdfs/sample-note.html" },
        { name: "Union Judiciary", path: "/pdfs/sample-note.html" },
        { name: "Supreme Court", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "Centre-State Relations", path: "/pdfs/sample-note.html" },
        { name: "Federal Structure", path: "/pdfs/sample-note.html" },
        { name: "Legislative Relations", path: "/pdfs/sample-note.html" },
        { name: "Financial Relations", path: "/pdfs/sample-note.html" }
      ]
    },
    "Programming in C": {
      "UNIT - I": [
        { name: "C Programming Basics", path: "/pdfs/sample-note.html" },
        { name: "Data Types and Variables", path: "/pdfs/sample-note.html" },
        { name: "Operators and Expressions", path: "/pdfs/sample-note.html" },
        { name: "Input/Output Operations", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - II": [
        { name: "Control Structures", path: "/pdfs/sample-note.html" },
        { name: "Loops and Conditions", path: "/pdfs/sample-note.html" },
        { name: "Arrays", path: "/pdfs/sample-note.html" },
        { name: "Functions", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - III": [
        { name: "Pointers", path: "/pdfs/sample-note.html" },
        { name: "Dynamic Memory", path: "/pdfs/sample-note.html" },
        { name: "Structures and Unions", path: "/pdfs/sample-note.html" },
        { name: "File Handling", path: "/pdfs/sample-note.html" }
      ],
      "UNIT - IV": [
        { name: "C99 Extensions", path: "/pdfs/sample-note.html" },
        { name: "Standard Libraries", path: "/pdfs/sample-note.html" },
        { name: "Basic Algorithms", path: "/pdfs/sample-note.html" },
        { name: "Sorting and Searching", path: "/pdfs/sample-note.html" }
      ]
    }
  };

  const { subjects, units } = semesterData;
  const subjectUnits = units[selectedSubject] || [];

  // PDF handling functions
  const handleDownload = (pdfPath, pdfName) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfName || 'document.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = (pdfPath) => {
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
        backgroundBlendMode: "soft-light",
      }}
    >
      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Semester header - Improved style with a more modern gradient and subtle pattern */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800 py-6 px-6 shadow-lg relative overflow-hidden rounded-lg">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
          </div>
          <h1 className="text-3xl font-bold text-white text-center relative z-10">
            CSE - 1st Semester
          </h1>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"></div>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center mt-6 px-4 gap-2 md:space-x-4 z-10">
          {["Syllabus", "Practical", "Notes", "Videos", "PYQs", "Books"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                    : "bg-white hover:bg-gray-100 shadow-sm"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* Main content with decorative elements */}
        <div className="flex flex-col items-center justify-center flex-1 py-8 px-6 relative">
          {/* Decorative blobs */}
          <div className="absolute top-32 left-1/4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-32 right-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

          {/* Content area */}
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-6 rounded-2xl shadow-xl z-10 w-full max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Subject sidebar */}
              <div className="lg:w-1/4">
                <h3 className="font-bold text-lg text-gray-700 mb-3 ml-2">
                  Subjects
                </h3>
                <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2 rounded">
                  {subjects.map((subject) => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        selectedSubject === subject
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-md"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content display area */}
              <div className="lg:w-3/4 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 pb-2 border-b">
                  {selectedSubject}
                </h2>

                <div className="space-y-4">
                  {activeTab === "Syllabus" ? (
                    <>
                      {subjectUnits.map((unit, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-400 hover:shadow-md transition-all duration-300"
                        >
                          <h3 className="text-lg font-semibold text-gray-800">
                            {unit.title}
                          </h3>
                          <p className="text-gray-700 mt-2 leading-relaxed">
                            {unit.desc}
                          </p>
                        </div>
                      ))}

                      {/* Study tips for the subject */}
                      <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">
                          Study Tips for {selectedSubject}
                        </h4>
                        <ul className="text-sm text-blue-700 ml-5 list-disc">
                          <li>
                            Break down complex topics into smaller, manageable
                            chunks
                          </li>
                          <li>
                            Use visual aids like diagrams and flowcharts for
                            better retention
                          </li>
                          <li>Practice solving previous year questions</li>
                          <li>Form study groups for difficult concepts</li>
                        </ul>
                      </div>
                    </>
                  ) : activeTab === "Notes" ? (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border-l-4 border-green-400">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">
                          📚 Unit-wise PDF Notes for {selectedSubject}
                        </h3>
                        <p className="text-green-700 text-sm">
                          Click on any unit below to access PDF notes and study materials
                        </p>
                      </div>
                      
                      {subjectUnits.map((unit, index) => {
                        const unitPdfs = pdfData[selectedSubject]?.[unit.title] || [];
                        return (
                          <div
                            key={index}
                            className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                          >
                            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-t-lg">
                              <h3 className="text-lg font-semibold flex items-center">
                                <span className="bg-white text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                  {index + 1}
                                </span>
                                {unit.title}
                              </h3>
                            </div>
                            
                            <div className="p-4">
                              <p className="text-gray-600 text-sm mb-4 italic">
                                {unit.desc.length > 100 
                                  ? `${unit.desc.substring(0, 100)}...` 
                                  : unit.desc}
                              </p>
                              
                              {unitPdfs.length > 0 ? (
                                <div>
                                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                    Available PDF Notes
                                  </h4>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {unitPdfs.map((pdf, idx) => (
                                      <div
                                        key={idx}
                                        className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                                      >
                                        <div className="flex items-center space-x-2 mb-3">
                                          <div className="flex-shrink-0">
                                            <svg 
                                              xmlns="http://www.w3.org/2000/svg" 
                                              className="h-6 w-6 text-red-500" 
                                              viewBox="0 0 20 20" 
                                              fill="currentColor"
                                            >
                                              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                            </svg>
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <h5 className="text-sm font-medium text-gray-800 truncate">
                                              {pdf.name}
                                            </h5>
                                            <p className="text-xs text-gray-500">
                                              PDF Document
                                            </p>
                                          </div>
                                        </div>
                                        
                                        <div className="flex space-x-2">
                                          <button
                                            onClick={() => handleView(pdf.path)}
                                            className="flex-1 flex items-center justify-center space-x-1 px-2 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
                                          >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                            <span>View</span>
                                          </button>
                                          
                                          <button
                                            onClick={() => handleDownload(pdf.path, pdf.name)}
                                            className="flex-1 flex items-center justify-center space-x-1 px-2 py-1.5 bg-green-500 hover:bg-green-600 text-white text-xs rounded transition-colors"
                                          >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <span>Download</span>
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="text-center py-8 bg-gray-50 rounded-lg">
                                  <div className="w-12 h-12 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  </div>
                                  <p className="text-gray-500 text-sm">
                                    PDF notes for this unit will be available soon
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                      
                      {/* Download tips */}
                      <div className="mt-6 bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <h4 className="font-medium text-yellow-800 mb-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          PDF Study Tips
                        </h4>
                        <ul className="text-sm text-yellow-700 ml-5 list-disc space-y-1">
                          <li>Download PDFs for offline study access</li>
                          <li>Use PDF annotations to highlight important concepts</li>
                          <li>Print key pages for quick reference during exams</li>
                          <li>Combine with syllabus topics for comprehensive study</li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                      <div className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-indigo-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <p className="text-xl text-gray-600 font-semibold mb-2">
                        {activeTab} section coming soon!
                      </p>
                      <p className="text-gray-500">
                        We're working hard to bring you this content
                      </p>
                      <button
                        className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm hover:shadow-lg transition-all duration-300"
                        onClick={() => setActiveTab("Syllabus")}
                      >
                        Go Back to Syllabus
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
