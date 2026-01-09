# tongue-ina
tongue-ina is a Web-based **sugar vs. salt optimizer** tool like yo mama's tastes<br>
NOT REQUIRING full ingredient list or advanced cooking knowledge
- suggests reasonable salt and sugar measurements based on food category
- helps users rebalance flavor after tastin'
- gradually learns individual taste preferences over time

## Why this tool
I've been tasting/flavoring my food by intuition<br>
Be like:
- “This taste like grandma food”
- “This tastes too gay"
- “This is a goddamn sea water”
But Tongue-ina turns those vague whinings into measurable feedback:
- How salty is it (1–5)?
- How sweet is it (1–5)?
- What small adjustment would actually help?

**Resources**
1) Taste concentration & preference (“bliss point” / sensory science)
- supports the idea of preferred taste concentration ranges
- a proxy reference for how pleasantness changes with salt/fat combinations comes from sensory testing on graded salt concentrations:
https://academic.oup.com/chemse/article/41/3/189/2365883

2) Salt preference and taste studies
- paper below reports actual ranges of salt preference (e.g., % wt/vol) measured in adults, which informs the baseline concentration ranges used in the app
- example experimental evidence showing measurement of salt preference concentrations:
https://pmc.ncbi.nlm.nih.gov/articles/PMC10066841/

3) Sweetness preference research
- supports how preferred concentrations of sweetener vary by group and shows the method of paired comparison taste tests
- classic human taste preference study (e.g., childhood sweet & salt preference correlations):
https://pubmed.ncbi.nlm.nih.gov/24637844/

4) Salt–sugar interaction (cross-modulation)
- supports the idea used in the app that salt and sugar influence perceived taste of each other
- a human experimental study showing how adding sweetness reduces aversion to high salt:
https://www.nature.com/articles/s41598-025-09602-x

5) WHO Guidelines / Health Context (Sodium & Sugar)
- salt (Sodium) intake recommendation
- world Health Organization (WHO) recommendation for sodium/salt:
https://www.who.int/news-room/fact-sheets/detail/sodium-reduction
https://www.who.int/tools/elena/interventions/sodium-cvd-adults

**Learning approach**
tongue-ina uses incremental preference calibration:
- Each rating slightly shifts future recommendations
- Preferences are tracked per food category
- Adjustments are slow and bounded

## What this app is not
❌Not a medical or nutrition diagnosis tool<br>
❌Not a calorie counter<br>
❌Not a recipe generator<br>
It is a taste-support tool, really

**Who this is for**
- learners exploring applied science + software and explainable systems
- people curious about taste perception
- anyone tired of guessing “how much is too much” :<
