// Data: Each language with its level
const frontLanguageData = [
    { language: 'Vanilla Script', level: 'Proficient' },
    { language: 'JavaScript', level: 'Proficient' },
    { language: 'TypeScript', level: 'Development Possible' },
    { language: 'AngularJS', level: 'Proficient' },
    { language: 'React', level: 'Development Possible' },
    { language: 'HTML/CSS', level: 'Proficient' },
    { language: 'SCSS', level: 'Development Possible' },
    { language: 'php', level: 'Development Possible' },
    { language: 'jquery', level: 'Development Possible' },
];

const backLanguageData = [
    { language: 'Java', level: 'Development Possible' },
    { language: 'Sprint Boot', level: 'Experienced' },
    { language: 'MySQL', level: 'Development Possible' },
    { language: 'PostgreSQL', level: 'Development Possible' }
]

const etcLanguageData = [
    { language: 'C/C++', level: 'Development Possible' },
    { language: 'Elastic Search', level: 'Experienced' },
    { language: 'Webpack', level: 'Experienced' },
    { language: 'Git/Github', level: 'Development Possible' },
    { language: 'Svn', level: 'Development Possible' },
    { language: 'Figma', level: 'Experienced' }
]
const makeHorizontalBarGraph = (cls, data) => {

    let tooltip = document.querySelector(`.${cls} .tooltip`);
    if (tooltip) {
        tooltip.remove();
    }
    
    tooltip = d3.select(`.${cls}`)
                .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip")
                .style("background-color", "white")
                .style("border", "solid")
                .style("border-width", "1px")
                .style("border-radius", "5px")
                .style("padding", "10px");

    const mouseover = function (d) {
        tooltip
            .html("SKILL: " + d.language + "<br>" + "LEVEL: " + d.level)
            .style("opacity", 1)
    };

    const mousemove = function (d) {
        tooltip
        .style("left", (d3.mouse(this)[0]+90) + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style("top", (d3.mouse(this)[1]) + "px")
    };
    const mouseleave = function (d) {
        tooltip
        .style("opacity", 0)
    };

    // Set up SVG dimensions
    const margin = { top: 20, right: 20, bottom: 30, left: 100 };
    const minWidth = 448;
    const maxWidth = 690;
    let svgWidth = window.innerWidth / 2;
    if (minWidth > svgWidth ) {
        svgWidth = minWidth;
    }
    if (svgWidth > maxWidth) {
        svgWidth = maxWidth;
    }
    const width = svgWidth - margin.left - margin.right;
    const height = data.length * 40 - margin.top - margin.bottom;

    // Append SVG to the body of the page
    let svg = document.querySelector(`.${cls} svg`);

    if (svg) {
        svg.remove();
    }

    svg = d3.select(`.${cls}`).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
    

    // X-axis: scale and draw
    const x = d3.scaleBand()
    .range([0, width])
    .domain(['Experienced', 'Development Possible', 'Proficient']);

    // Y-axis: scale and draw
    const y = d3.scaleBand()
    .range([0, height])
    .domain(data.map(d => d.language))
    .padding(0.2);

    // Axes
    svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class", "x-axis")
    .call(d3.axisBottom(x));

    svg.append("g")
    .attr("class", "y-axis")
    .call(d3.axisLeft(y));

    // Bars
    svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", d => y(d.language))
    .attr("x", 0)
    .attr("width", d => x(d.level) + x.bandwidth() / 3 +20)
    .attr("height", y.bandwidth())
    .attr("fill", d => getColor(d))
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);

    svg.select(".x-axis")
   .selectAll("text")
   .style("font-size", "14px"); // Change 12px to your desired font size

    // Adjust font size for y-axis
    svg.select(".y-axis")
    .selectAll("text")
    .style("font-size", "14px"); // C
};

const getColor = (d) => {
    switch(d.level) {
        case "Experienced":
            return "#ace3d6";
        case "Development Possible":
            return "#5bab98";
        case "Proficient":
            return "#019472";
    }
}




window.addEventListener("DOMContentLoaded", (event) => {
    makeHorizontalBarGraph("front-end-skill-container", frontLanguageData);
    makeHorizontalBarGraph("back-end-skill-container", backLanguageData);
    makeHorizontalBarGraph("etc-skill-container", etcLanguageData);
});

window.addEventListener('resize', () => {
    makeHorizontalBarGraph("front-end-skill-container", frontLanguageData);
    makeHorizontalBarGraph("back-end-skill-container", backLanguageData);
    makeHorizontalBarGraph("etc-skill-container", etcLanguageData);    
});