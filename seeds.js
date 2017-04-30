var CommonSymptom = require("./server/models/commonSymptom");

var data = [

    {name: "Headache", category: "Head/Face/Neck"},
    {name: "Facial paralysis", category: "Head/Face/Neck"},
    {name: "Facial tingling", category: "Head/Face/Neck"},
    {name: "Stiff neck", category: "Head/Face/Neck"},
    {name: "Sore throat", category: "Head/Face/Neck"},
    {name: "Heightened allergies", category: "Head/Face/Neck"},
    {name: "Facial Twitching", category: "Head/Face/Neck"},
    {name: "Jaw pain/stiffness", category: "Head/Face/Neck"},
    {name: "Changes in smell/taste", category: "Head/Face/Neck"},

    {name: "Upset stomach", category: "Digestive/excretory System"},
    {name: "Irritable bladder", category: "Digestive/excretory System"},
    {name: "Weight loss", category: "Digestive/excretory System"},
    {name: "Weight gain", category: "Digestive/excretory System"},
    {name: "Loss of appetite", category: "Digestive/excretory System"},
    {name: "Anorexia", category: "Digestive/excretory System"},

    {name: "Difficulty breathing", category: "Respiratory/Circulatory Systems"},
    {name: "Night sweats", category: "Respiratory/Circulatory Systems"},
    {name: "Unexplained chills", category: "Respiratory/Circulatory Systems"},
    {name: "Heart palpitations", category: "Respiratory/Circulatory Systems"},
    {name: "Diminished exercise tolerance", category: "Respiratory/Circulatory Systems"},
    {name: "Heart block/murmurs", category: "Respiratory/Circulatory Systems"},
    {name: "Chest pain/rib soreness", category: "Respiratory/Circulatory Systems"},

    {name: "Mood swings", category: "Psychiatric Symptoms"},
    {name: "Irritability/agitation", category: "Psychiatric Symptoms"},
    {name: "Depression", category: "Psychiatric Symptoms"},
    {name: "Anxierty", category: "Psychiatric Symptoms"},
    {name: "Aggressive behavior", category: "Psychiatric Symptoms"},
    {name: "Impulsiveness", category: "Psychiatric Symptoms"},
    {name: "Suicidal thoughts", category: "Psychiatric Symptoms"},
    {name: "Excessive crying", category: "Psychiatric Symptoms"},
    {name: "Insomnia", category: "Psychiatric Symptoms"},
    {name: "Hypersomnia", category: "Psychiatric Symptoms"},
    {name: "Paranoia", category: "Psychiatric Symptoms"},
    {name: "Hallucinations", category: "Psychiatric Symptoms"},
    {name: "Obsessive-compulsive behavior", category: "Psychiatric Symptoms"},
    {name: "Bipolar disorder/manic behavior", category: "Psychiatric Symptoms"},
    {name: "Schizophrenic-like symptoms or behavior", category: "Psychiatric Symptoms"},

    {name: "Dementia", category: "Cognitive Symptoms"},
    {name: "short term memory loss", category: "Cognitive Symptoms"},
    {name: "long term memory loss", category: "Cognitive Symptoms"},
    {name: "Poor school or work performance", category: "Cognitive Symptoms"},
    {name: "Distractibility/attention deficit problems", category: "Cognitive Symptoms"},
    {name: "Confusion", category: "Cognitive Symptoms"},
    {name: "Difficulty with concentration", category: "Cognitive Symptoms"},
    {name: "Difficulty reading", category: "Cognitive Symptoms"},
    {name: "Difficulty spelling", category: "Cognitive Symptoms"},
    {name: "Disorientation/feeling lost", category: "Cognitive Symptoms"},

    {name: "Menstrual pain", category: "Reproduction/Sexuality: Women"},
    {name: "Menstrual Irregularity", category: "Reproduction/Sexuality: Women"},
    {name: "Pregnancy-related issues", category: "Reproduction/Sexuality: Women"},
    {name: "Extreme PMS symptoms", category: "Reproduction/Sexuality: Women"},
    {name: "Testicular pain", category: "Reproduction/Sexuality: Men"},
    {name: "Pulvic pain", category: "Reproduction/Sexuality: Men"},

    {name: "Double/blurry vission", category: "Eyes/Vision"},
    {name: "Vision Changes", category: "Eyes/Vision"},
    {name: "Wandaring/lazy eye", category: "Eyes/Vision"},
    {name: "Pink eye", category: "Eyes/Vision"},
    {name: "Light sensitivity", category: "Eyes/Vision"},
    {name: "Eye pain/swelling", category: "Eyes/Vision"},
    {name: "Floaters", category: "Eyes/Vision"},
    {name: "Red Eyes", category: "Eyes/Vision"},

    {name: "Decreased hearing", category: "Ears/Hearing"},
    {name: "Ringing/buzzing", category: "Ears/Hearing"},
    {name: "Sound sensitivity", category: "Ears/Hearing"},
    {name: "Ear pain", category: "Ears/Hearing"},

    {name: "Joint pain", category: "Musculoskeletal System"},
    {name: "Joint swelling", category: "Musculoskeletal System"},
    {name: "Stiffness", category: "Musculoskeletal System"},
    {name: "Muscle pain", category: "Musculoskeletal System"},
    {name: "Cramps", category: "Musculoskeletal System"},
    {name: "Poor muscle coordination", category: "Musculoskeletal System"},
    {name: "Muscle weakness", category: "Musculoskeletal System"},

    {name: "Numbness in body/tingling", category: "Neurologic System"},
    {name: "Burning/stabbing sensations", category: "Neurologic System"},
    {name: "Burning in feet", category: "Neurologic System"},
    {name: "Weakness of limbs", category: "Neurologic System"},
    {name: "Body paralysis", category: "Neurologic System"},
    {name: "Tremors/unexplained shaking", category: "Neurologic System"},
    {name: "Seizures", category: "Neurologic System"},
    {name: "Strokes", category: "Neurologic System"},
    {name: "Poor balance", category: "Neurologic System"},
    {name: "Dizziness", category: "Neurologic System"},
    {name: "Increased motion sickness", category: "Neurologic System"},
    {name: "Lightheadedness", category: "Neurologic System"},
    {name: "Fainting", category: "Neurologic System"},
    {name: "Encephalopathy", category: "Neurologic System"},
    {name: "Brain inflamation", category: "Neurologic System"},
    {name: "Meningitis", category: "Neurologic System"},
    {name: "Academic or vocational decline", category: "Neurologic System"},
    {name: "Difficulty with multitasking", category: "Neurologic System"},
    {name: "Organizational difficulty", category: "Neurologic System"},
    {name: "Auditory processing problems", category: "Neurologic System"},
    {name: "Visiual processing problems", category: "Neurologic System"},

    {name: "Benign tumor-like nodules", category: "Skin Problems"},
    {name: "Rash", category: "Skin Problems"},

    {name: "Decreased recreational interest", category: "General Well-being"},
    {name: "Fatigue", category: "General Well-being"},
    {name: "Exhaustion", category: "General Well-being"},
    {name: "Fevers", category: "General Well-being"},
    {name: "Flu-like symptoms", category: "General Well-being"},

    {name: "Thyroid disfunction", category: "Organ Problems"},
    {name: "Kidney related issues/bed wetting", category: "Organ Problems"},
    {name: "Liver inflamation", category: "Organ Problems"}
];

function seedDB() {
    // remove common symptoms
    CommonSymptom.remove({}, function(err) {
        if (err) {
            console.log(err);
        } else {
            // add common symptoms
            data.forEach(function(seed) {
                CommonSymptom.create(seed, function(err, symptom) {
                    if (err) {
                        console.log(err);
                    }
                });
            });
        }
    });
}

module.exports = seedDB;
