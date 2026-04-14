export const iotProjectContent = {
    heading: "AI-Based Predictive Irrigation Control System",
    subtitle: "Design and Modeling - Final Year Engineering Project",
    abstract:
        "A predictive smart irrigation system that combines soil-water physical modeling and AI evapotranspiration estimation to maintain optimal crop moisture while reducing water waste and pump energy use in arid and semi-arid environments.",
    goals: [
        "Maintain soil moisture within a healthy range.",
        "Minimize water and electricity consumption.",
        "Adapt control to environmental conditions.",
        "Compensate for sensor delay after irrigation events.",
        "Prevent oscillatory valve/pump switching behavior.",
    ],
    operatingMode:
        "The controller runs in discrete time intervals (for example every 30 minutes). At each step, environmental measurements update the soil-water state and the irrigation action.",
    architecture: [
        "Environmental sensors: temperature, humidity, and solar radiation.",
        "Soil moisture sensor for root-zone estimation.",
        "Machine learning model for evapotranspiration prediction.",
        "Control logic using hysteresis plus predictive correction.",
        "Pump and valve actuator for irrigation execution.",
    ],
    stateVariable: [
        "Core state: SW(t), the root-zone soil water content at time t.",
        "This variable represents effective water storage in the plant root volume.",
    ],
    equations: {
        waterBalance: "SW(t+1) = SW(t) + eta*I(t) - ET(t) - D(t)",
        evapotranspiration: "ET(t) = f(T(t), RH(t), R_sun(t), Time(t))",
        drainage: "D(t) = 0 if SW(t) <= FC, otherwise D(t) = k*(SW(t) - FC)",
        delayMeasurement: "M(t) = SW(t - tau)",
        delayCorrection: "SW_est(t) = M(t) + sum(eta*I(i)) for i = t-tau..t",
        targetMoisture: "SW_target = (SW_min + SW_max) / 2",
        irrigationNeed: "I(t) = max(0, (SW_target - SW_est(t)) / eta)",
        valveTime: "ValveTime(t) = I(t) / Q",
    },
    modelHighlights: [
        "Soil water balance preserves physical consistency between inflow, losses, and drainage.",
        "Evapotranspiration is predicted with ML to capture nonlinear weather interactions.",
        "Drainage is activated only above field capacity to avoid unrealistic accumulation.",
        "Sensor delay correction prevents over-irrigation immediately after watering.",
        "Hysteresis control with SW_min and SW_max avoids rapid on/off switching.",
    ],
    controlLaw: [
        "If SW_est(t) < SW_min: irrigation is enabled.",
        "If SW_est(t) > SW_max: irrigation is stopped.",
        "Irrigation target is the midpoint of the healthy moisture band.",
        "Negative irrigation demand is clipped to zero.",
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
    offlineAndStabilityNotes: [
        "Delay-compensated estimation improves robustness to sensor latency and infiltration lag.",
        "Hysteresis band reduces actuator wear by limiting unnecessary valve toggling.",
        "Deterministic control core provides predictable behavior under changing weather.",
    ],
    implementationNote:
        "Recommended implementation uses deterministic closed-loop control while ML is reserved for evapotranspiration prediction, balancing stability and AI value.",
    practicalStack: [
        "Edge hardware: soil/environment sensors, pump, and valve.",
        "Control software: discrete-time loop with prediction and actuation stages.",
        "ML component: ET predictor trained on local weather and irrigation history.",
        "Deployment focus: smart agriculture in water-scarce regions.",
    ],
    conclusion:
        "The system provides a robust, scientifically grounded smart-agriculture controller suited to water-scarce regions by integrating physical dynamics, delay compensation, and AI prediction.",
}
