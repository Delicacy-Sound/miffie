module.exports = (value, maxValue, size) => {
  const percentage = value / maxValue;
  const progress = Math.round(size * percentage);
  const emptyProgress = size - progress;

  const progressText = "▇".repeat(progress);
  const emptyProgressText = "—".repeat(emptyProgress);
  const percentageText = Math.round(percentage * 100) + "%";
  const Bar = progressText + emptyProgressText;
  return { Bar, percentageText };
};
