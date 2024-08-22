const subjectsData = [
    {
        courseTitle: "Radar Systems",
        courseCode: "TELE-620",
        creditHours: 3,
        prerequisite: "none",
        batch: "2K18",
        part: "Final Year",
        semester: "2nd Semester",
        courseObjectives: "To introduce the basics of Radar system principles and laws are discussed with emphasis on to provide basic understanding of various radar components and subsystems. The course attempts to give the student an insight in the application of advanced radar systems in defense and civil measurement.",
        courseOutline: "Introduction: Radar Block Diagram & Operation, Radar Range Equation, Radar Frequencies, Applications of Radar Radar Parameters:Prediction of Range Performance, Minimum Detectable Signal, Receiver Noise, Signal to Noise Ratio, Integration of Radar pulses, Radar Cross Section, Transmitter Power, Antenna Parameters, System Losses, Propagation Effects, Radar Clutters. Radar Types: CW and Frequency Modulated Radar, MTI and Pulse Doppler Radar, Tracking Radar. Components of Radars: Radar Transmitters, Radar Antennas, Receivers, Displays and Duplexers. Detection of Radar Signals in Noise: Detection Criteria, Detector Characteristics, Performance of Radar Operator, Automatic Detection.",
        books: {
            book1: "Skolnik M.I., \"Introduction to Radar System\", McGraw Hill. 2002",
            book2: "Skolnik M.I., \"Burtan R., |\"Radar Engineering\", McGraw Hill. 2005",
        }
    },
    {
        courseTitle: "Spread Spectrum Communications",
        courseCode: "TELE-622",
        creditHours: 3,
        prerequisite: "Telecommunication Systems, Wireless Communication, Probability Theory",
        batch: "2K18",
        part: "Final Year",
        semester: "2nd Semester",
        courseObjectives: "This course teaches the fundamentals of digital communication that are the foundation for many of the techniques employed in the generation of spread spectrum waveform.",
        courseOutline: "Introduction to the theory of spread spectrum communications: direct sequence, frequency and time hopping techniques. Topics include properties of pseudo-random spreading sequences, low-probability-of-intercept and anti-jamming methods, performance of spread spectrum systems, application of spread spectrum techniques in radio and optical code-division multiple access (CDMA) systems. Recent development in spread spectrum communications and applications will be discussed.",
        books: {
            book1: "R. L. Peterson, R. E. Ziemer, and D. E. Borth, Introduction to Spread Spectrum Communications, Prentice Hall, 1995. (ISBN 0-02-431623-7)",
            book2: "A. J. Viterbi, CDMA: Principles of Spread Spectrum Communication, Addison-Wesley, 1995.",
            book3: "J. G. Proakis, M. Salehi, and G. Bauch, Contemporary Communication Systems Using MATLAB and Simulink, Second edition, Brooks/Cole Pub Co., 2004."
        }
    }
]

module.exports = subjectsData