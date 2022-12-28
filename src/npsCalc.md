-- Calculate the percentage of Promoters (9-10 rating)
SELECT COUNT(_) _ 100.0 / (SELECT COUNT(\*) FROM survey_responses)
FROM survey_responses
WHERE score BETWEEN 9 AND 10

-- Calculate the percentage of Detractors (0-6 rating)
SELECT COUNT(_) _ 100.0 / (SELECT COUNT(\*) FROM survey_responses)
FROM survey_responses
WHERE score BETWEEN 0 AND 6

-- Calculate the NPS by subtracting the percentage of Detractors from the percentage of Promoters
SELECT
(SELECT COUNT(_) _ 100.0 / (SELECT COUNT(\*) FROM survey_responses)
FROM survey_responses
WHERE score BETWEEN 9 AND 10)

- (SELECT COUNT(_) _ 100.0 / (SELECT COUNT(\*) FROM survey_responses)
  FROM survey_responses
  WHERE score BETWEEN 0 AND 6)
