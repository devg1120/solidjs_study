//import Chart from 'chart.js'
//import Chart from 'chart.js/auto'
//import jsVectorMap from 'jsvectormap';

window.theme={
	primary:"#3B7DDD",
	secondary:"#6c757d",
	success:"#1cbb8c",
	info:"#17a2b8",
	warning:"#fcb92c",
	danger:"#dc3545",
	white:"#fff",
	"gray-100":"#f8f9fa",
	"gray-200":"#e9ecef",
	"gray-300":"#dee2e6",
	"gray-400":"#ced4da",
	"gray-500":"#adb5bd",
	"gray-600":"#6c757d",
	"gray-700":"#495057",
	"gray-800":"#343a40",
	"gray-900":"#212529",
	black:"#000"
};

            var cl = () => {
               const e = document.getElementsByClassName("js-sidebar")[0],
                  t = document.getElementsByClassName("js-sidebar-toggle")[0];
               e && t && t.addEventListener("click", (() => {
                  e.classList.toggle("collapsed"), e.addEventListener("transitionend", (() => {
                     window.dispatchEvent(new Event("resize"))
                  }))
               }))                     
            };
         //document.addEventListener("DOMContentLoaded", (() => (dl(), void cl())));
         document.addEventListener("DOMContentLoaded", (() => ( void cl())));


/*
document.addEventListener("DOMContentLoaded", function() {
	
	var ctx = document.getElementById("chartjs-dashboard-line").getContext("2d");
	var gradient = ctx.createLinearGradient(0, 0, 0, 225);
	gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
	gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
	// Line chart
	new Chart(document.getElementById("chartjs-dashboard-line"), {
		type: "line",
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [{
				label: "Sales ($)",
				fill: true,
				backgroundColor: gradient,
			t	borderColor: window.theme.primary,
				data: [
					2115,
					1562,
					1584,
					1892,
					1587,
					1923,
					2566,
					2448,
					2805,
					3438,
					2917,
					3327
				]
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			tooltips: {
				intersect: false
			},
			hover: {
				intersect: true
			},
			plugins: {
				filler: {
					propagate: false
				}
			},
			scales: {
				xAxes: [{
					reverse: true,
					gridLines: {
						color: "rgba(0,0,0,0.0)"
					}
				}],
				yAxes: [{
					ticks: {
						stepSize: 1000
					},
					display: true,
					borderDash: [3, 3],
					gridLines: {
						color: "rgba(0,0,0,0.0)"
					}
				}]
			}
		}
	});
});
*/
/*
document.addEventListener("DOMContentLoaded", function() {
	// Pie chart
	new Chart(document.getElementById("chartjs-dashboard-pie"), {
		type: "pie",
		data: {
			labels: ["Chrome", "Firefox", "IE"],
			datasets: [{
				data: [4306, 3801, 1689],
				backgroundColor: [
					window.theme.primary,
					window.theme.warning,
					window.theme.danger
				],
				borderWidth: 5
			}]
		},
		options: {
			responsive: !window.MSInputMethodContext,
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			cutoutPercentage: 75
		}
	});
});
*/
/*
document.addEventListener("DOMContentLoaded", function() {
	// Bar chart
	new Chart(document.getElementById("chartjs-dashboard-bar"), {
		type: "bar",
		data: {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			datasets: [{
				label: "This year",
				backgroundColor: window.theme.primary,
				borderColor: window.theme.primary,
				hoverBackgroundColor: window.theme.primary,
				hoverBorderColor: window.theme.primary,
				data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
				barPercentage: .75,
				categoryPercentage: .5
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					gridLines: {
						display: false
					},
					stacked: false,
					ticks: {
						stepSize: 20
					}
				}],
				xAxes: [{
					stacked: false,
					gridLines: {
						color: "transparent"
					}
				}]
			}
		}
	});
});
*/
/*
document.addEventListener("DOMContentLoaded", function() {
	var markers = [{
			coords: [31.230391, 121.473701],
			name: "Shanghai"
		},
		{
			coords: [28.704060, 77.102493],
			name: "Delhi"
		},
		{
			coords: [6.524379, 3.379206],
			name: "Lagos"
		},
		{
			coords: [35.689487, 139.691711],
			name: "Tokyo"
		},
		{
			coords: [23.129110, 113.264381],
			name: "Guangzhou"
		},
		{
			coords: [40.7127837, -74.0059413],
			name: "New York"
		},
		{
			coords: [34.052235, -118.243683],
			name: "Los Angeles"
		},
		{
			coords: [41.878113, -87.629799],
			name: "Chicago"
		},
		{
			coords: [51.507351, -0.127758],
			name: "London"
		},
		{
			coords: [40.416775, -3.703790],
			name: "Madrid "
		}
	];
	var map = new jsVectorMap({
		map: "world",
		selector: "#world_map",
		zoomButtons: true,
		markers: markers,
		markerStyle: {
			initial: {
				r: 9,
				strokeWidth: 7,
				stokeOpacity: .4,
				fill: window.theme.primary
			},
			hover: {
				fill: window.theme.primary,
				stroke: window.theme.primary
			}
		},
		zoomOnScroll: false
	});
	window.addEventListener("resize", () => {
		map.updateSize();
	});
});

*/
/*
document.addEventListener("DOMContentLoaded", function() {
	var date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
	var defaultDate = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate();
	document.getElementById("datetimepicker-dashboard").flatpickr({
		inline: true,
		prevArrow: "<span title=\"Previous month\">&laquo;</span>",
		nextArrow: "<span title=\"Next month\">&raquo;</span>",
		defaultDate: defaultDate
	});
});

*/
