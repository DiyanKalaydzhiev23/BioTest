function showCharts(accuracy, solvedTests, position) {
    showChartAccuracy(accuracy);
    showChartSolvedTests(solvedTests);
    showChartPosition(position);
}


function showChartAccuracy(percentage) {
    const data = anychart.data.set([
        ['Точност', percentage],
        ['', 100 - percentage],
    ]);

    const chart = anychart.pie(data)
    chart.innerRadius('55%');
    chart.container('chartAccuracy');
    chart.labels(false);
    chart.legend(false);
    chart.background().fill("none");
    chart.draw();

    const palette = anychart.palettes.distinctColors();
  
    palette.items([
        { color: '#00f387' },
        { color: '#96a6a6' }
    ]);

    chart.palette(palette);

    const label = anychart.standalones.label();

    label
    .useHtml(true)
    .text(
        `<span style = "color: white; font-size:1rem;">Точност: ${percentage}%</span>`
    )
    .position('center')
    .anchor('center')
    .hAlign('center')
    .vAlign('middle');

    chart.center().content(label);
}

function showChartSolvedTests(solvedTests) {
    const data = anychart.data.set([
        ['Решени тестове', solvedTests],
        ['', 100 - solvedTests],
    ]);

    const chart = anychart.pie(data)

    chart.innerRadius('55%');
    chart.container('chartSolvedTests');
    chart.labels(false);
    chart.legend(false);
    chart.background().fill("none");
    chart.draw();

    const palette = anychart.palettes.distinctColors();
  
    palette.items([
        { color: '#00f387' },
        { color: '#96a6a6' }
    ]);

    chart.palette(palette);

    const label = anychart.standalones.label();

    label
    .useHtml(true)
    .text(
        `<span style = "color: white; font-size:1rem;">Решени тестове:<br>${solvedTests}</span>`
    )
    .position('center')
    .anchor('center')
    .hAlign('center')
    .vAlign('middle');

    chart.center().content(label);
}

function showChartPosition(position) {
    const data = anychart.data.set([
        ['Позиция', 100],
    ]);

    const chart = anychart.pie(data)

    chart.innerRadius('55%');
    chart.container('chartPosition');
    chart.labels(false);
    chart.legend(false);
    chart.background().fill("none");
    chart.draw();

    const palette = anychart.palettes.distinctColors();
  
    palette.items([
        { color: '#00f387' },
        { color: '#96a6a6' }
    ]);

    chart.palette(palette);

    const label = anychart.standalones.label();

    label
    .useHtml(true)
    .text(
        `<span style = "color: white; font-size:1rem;">Позиция: ${position}</span>`
    )
    .position('center')
    .anchor('center')
    .hAlign('center')
    .vAlign('middle');

    chart.center().content(label);
}