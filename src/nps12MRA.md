SELECT
month,
-- Calculate the NPS for the current month
(SELECT COUNT(_) _ 100.0 / (SELECT COUNT(\*) FROM survey_responses WHERE month = s.month)
FROM survey_responses s
WHERE s.month = month AND rating BETWEEN 9 AND 10)

- (SELECT COUNT(_) _ 100.0 / (SELECT COUNT(_) FROM survey_responses WHERE month = s.month)
  FROM survey_responses s
  WHERE s.month = month AND rating BETWEEN 0 AND 6) AS nps,
  -- Calculate the rolling average NPS for the past 12 months
  AVG(
  (SELECT COUNT(_) _ 100.0 / (SELECT COUNT(_) FROM survey_responses WHERE month = s.month)
  FROM survey_responses s
  WHERE s.month = month AND rating BETWEEN 9 AND 10) -
  (SELECT COUNT(_) _ 100.0 / (SELECT COUNT(_) FROM survey_responses WHERE month = s.month)
  FROM survey_responses s
  WHERE s.month = month AND rating BETWEEN 0 AND 6)
  ) OVER (ORDER BY month ROWS BETWEEN 11 PRECEDING AND CURRENT ROW) AS rolling_average_nps,
  -- Calculate the percentage of Promoters for the current month
  (SELECT COUNT(_) _ 100.0 / (SELECT COUNT(_) FROM survey_responses WHERE month = s.month)
  FROM survey_responses s
  WHERE s.month = month AND rating BETWEEN 9 AND 10) AS promoters,
  -- Calculate the percentage of Passives for the current month
  (SELECT COUNT(_) _ 100.0 / (SELECT COUNT(_) FROM survey_responses WHERE month = s.month)
  FROM survey_responses s
  WHERE s.month = month AND rating BETWEEN 7 AND 8) AS passives,
  -- Calculate the percentage of Detractors for the current month
  (SELECT COUNT(_) _ 100.0 / (SELECT COUNT(_) FROM survey_responses WHERE month = s.month)
  FROM survey_responses s
  WHERE s.month = month AND rating BETWEEN 0 AND 6) AS detractors
  FROM (
  -- Generate a list of months to use as the x-axis for the chart
  SELECT DISTINCT month FROM survey_responses ORDER BY month
  ) months
