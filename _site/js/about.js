// Data: Each language with its level
const frontLanguageData = [
  { language: "Vanilla Script", level: "Proficient", step: 3 },
  { language: "JavaScript", level: "Proficient", step: 3 },
  { language: "TypeScript", level: "Development Possible", step: 2 },
  { language: "AngularJS", level: "Proficient", step: 3 },
  { language: "React", level: "Development Possible", step: 2 },
  { language: "HTML/CSS", level: "Proficient", step: 3 },
  { language: "SCSS", level: "Development Possible", step: 2 },
  { language: "php", level: "Development Possible", step: 2 },
  { language: "jquery", level: "Development Possible", step: 2 },
];

const backLanguageData = [
  { language: "Java", level: "Development Possible", step: 2 },
  { language: "Sprint Boot", level: "Experienced", step: 1 },
  { language: "MySQL", level: "Development Possible", step: 2 },
  { language: "PostgreSQL", level: "Development Possible", step: 2 },
];

const etcLanguageData = [
  { language: "C/C++", level: "Development Possible", step: 2 },
  { language: "Elastic Search", level: "Experienced", step: 1 },
  { language: "Webpack", level: "Experienced", step: 1 },
  { language: "Git/Github", level: "Development Possible", step: 2 },
  { language: "Svn", level: "Development Possible", step: 2 },
  { language: "Figma", level: "Experienced", step: 1 },
];
const makeHorizontalBarGraph = (cls, data) => {
  let tooltip = document.querySelector(`.${cls} .tooltip`);
  if (tooltip) {
    tooltip.remove();
  }

  tooltip = d3
    .select(`.${cls}`)
    .append("div")
    .attr("class", "tooltip");

  const mouseover = function (d) {
    tooltip
      .style("opacity", 1);

    tooltip.style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY) + "px")
      .html("SKILL: " + d.language + "<br>" + "LEVEL: " + d.level);
  };

  const mousemove = function (d) {
    tooltip
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY) + "px");
  };
  const mouseleave = function (d) {
    tooltip
    .style("opacity", 0);
  };

  // Set up SVG dimensions
  const margin = { top: 20, right: 20, bottom: 45, left: 100 };
  const minWidth = 448;
  const maxWidth = 690;
  let svgWidth = window.innerWidth / 2;
  if (minWidth > svgWidth) {
    svgWidth = minWidth;
  }
  if (svgWidth > maxWidth) {
    svgWidth = maxWidth;
  }
  const width = svgWidth - margin.left - margin.right;
  const barHeight = 20;
  const height = data.length * barHeight;

  // Append SVG to the body of the page
  let svg = document.querySelector(`.${cls} svg`);

  if (svg) {
    svg.remove();
  }

  svg = d3
    .select(`.${cls}`)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // X-axis: scale and draw
  /* const x = d3
    .scaleBand()
    .range([0, width])
    .domain(["Experienced", "Development Possible", "Proficient"])
    .padding(0.5); */
    const x = d3
  .scaleOrdinal()
  .domain(["", "Experienced", "Development Possible", "Proficient"])
  .range([0, (width/4), (2*width)/4, (3*width)/4]);

  // Y-axis: scale and draw
  const y = d3
    .scaleBand()
    .range([0, height])
    .domain(data.map((d) => d.language))
    .padding(0.3);

  // Axes
  svg
    .append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class", "x-axis")
    .call(d3.axisBottom(x))
    .selectAll(".x-axis text")
    .style("font-size", "14px")
    .style("text-anchor", "end")
    //.attr("transform-origin", "top right")
    .attr("transform", "rotate(-10)");

  svg.append("g")
  .attr("class", "y-axis")
  .call(d3.axisLeft(y))
  .selectAll("text")
  .style("font-size", "14px");

  // Bars
  svg
    .selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", (d) => y(d.language))
    .attr("x", 0)
    .attr("width", (d) => x(d.level))
    .attr("height", y.bandwidth())
    .attr("fill", (d) => getColor(d))
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);
};

const getColor = (d) => {
  switch (d.level) {
    case "Experienced":
      return "#ace3d6";
    case "Development Possible":
      return "#5bab98";
    case "Proficient":
      return "#019472";
  }
};

window.addEventListener("DOMContentLoaded", (event) => {
  makeHorizontalBarGraph("front-end-skill-container", frontLanguageData);
  makeHorizontalBarGraph("back-end-skill-container", backLanguageData);
  makeHorizontalBarGraph("etc-skill-container", etcLanguageData);
});

window.addEventListener("resize", () => {
  makeHorizontalBarGraph("front-end-skill-container", frontLanguageData);
  makeHorizontalBarGraph("back-end-skill-container", backLanguageData);
  makeHorizontalBarGraph("etc-skill-container", etcLanguageData);
});
