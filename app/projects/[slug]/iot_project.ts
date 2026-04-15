export const iotProjectContent = {
    heading: "AI-Based Predictive Irrigation Control System",
    subtitle: "Design and Modeling - Final Year Engineering Project",
    abstract:
        "A predictive smart irrigation system that combines soil-water physical modeling and AI evapotranspiration estimation to maintain optimal crop moisture while reducing water and energy usage in arid and semi-arid environments.",
    introduction:
        "Traditional irrigation often relies on fixed schedules or simple thresholds, which can cause overwatering and unnecessary energy consumption. This project introduces a predictive closed-loop approach that accounts for environmental variation, soil dynamics, and delayed sensor feedback.",
    goals: [
        "Maintain soil moisture within a healthy range.",
        "Minimize water and electricity consumption.",
        "Adapt control to environmental conditions.",
        "Compensate for sensor delay after irrigation events.",
        "Prevent oscillatory valve/pump switching behavior.",
    ],
    architectureNote:
        "The system runs in discrete timesteps (for example, every 30 minutes). At each step it updates soil state, predicts losses, and computes irrigation action.",
    architecture: [
        "Environmental sensors: temperature, humidity, and solar radiation.",
        "Soil moisture sensor for root-zone estimation.",
        "Machine learning model for evapotranspiration prediction.",
        "Control logic using hysteresis plus predictive correction.",
        "Pump and valve actuator for irrigation execution.",
    ],
    stateVariable: "SW(t): root-zone soil water content at timestep t.",
    equations: [
        "Soil water balance: SW(t+1) = SW(t) + eta*I(t) - ET(t) - D(t)",
        "AI evapotranspiration model: ET(t) = f(T(t), RH(t), R_sun(t), Time(t))",
        "Drainage model: D(t)=0 when SW(t)<=FC, else D(t)=k*(SW(t)-FC)",
        "Measured moisture with delay: M(t)=SW(t-tau)",
        "Delay-corrected estimate: SW_est(t)=M(t)+sum(eta*I(i)) over delayed irrigation window",
        "Hysteresis law: irrigate if SW_est(t)<SW_min, stop if SW_est(t)>SW_max",
        "Target midpoint: SW_target=(SW_min+SW_max)/2",
        "Irrigation command: I(t)=max(0,(SW_target-SW_est(t))/eta)",
        "Valve time conversion: ValveTime(t)=I(t)/Q",
    ],
    modelHighlights: [
        "Physically consistent water-conservation state update across timesteps.",
        "Machine learning captures nonlinear weather interactions for ET prediction.",
        "Drainage activates only above field capacity to avoid unrealistic accumulation.",
        "Delay compensation reduces over-irrigation during infiltration lag.",
        "Hysteresis creates stable switching and reduces actuator wear.",
    ],
    closedLoopSteps: [
        "Read environmental and soil sensors.",
        "Predict evapotranspiration with ML.",
        "Estimate corrected soil-water state.",
        "Update water-balance equation.",
        "Apply hysteresis decision (irrigate/stop).",
        "Compute irrigation amount and convert to valve time.",
    ],
    performanceObjectives: [
        "Water-use efficiency",
        "Energy consumption reduction",
        "Soil-moisture stability (low variance)",
        "Reduced crop stress index",
    ],
    prototypeApproach: [
        "Use deterministic closed-loop control for final actuator decisions.",
        "Use AI only for evapotranspiration prediction to keep control stable and explainable.",
        "Evaluate with scenario testing across weather variations and irrigation efficiencies.",
    ],
    implementationNote:
        "Recommended implementation uses deterministic closed-loop control while ML is reserved for evapotranspiration prediction, balancing stability and AI value.",
    conclusion:
        "The system provides a robust, scientifically grounded smart-agriculture controller suited to water-scarce regions by integrating physical dynamics, delay compensation, and AI prediction.",
}
