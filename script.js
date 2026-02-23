let jobs = JSON.parse(localStorage.getItem("jobs")) || [
  {id:1, title:"Frontend Developer", company:"MetaTech", location:"Dhaka", salary:"40k-60k", status:"all"},
  {id:2, title:"Backend Engineer", company:"DevHive", location:"Remote", salary:"50k-70k", status:"all"},
  {id:3, title:"Data Analyst", company:"DataSoft", location:"Dhaka", salary:"45k-65k", status:"all"},
  {id:4, title:"Cloud Engineer", company:"CloudNet", location:"Singapore", salary:"80k-100k", status:"all"},
  {id:5, title:"UI Designer", company:"Innova", location:"Remote", salary:"30k-40k", status:"all"},
  {id:6, title:"Security Analyst", company:"CyberX", location:"Dhaka", salary:"60k-90k", status:"all"},
  {id:7, title:"React Developer", company:"Softvence", location:"Remote", salary:"55k-75k", status:"all"},
  {id:8, title:"QA Engineer", company:"NextGen", location:"Dhaka", salary:"35k-50k", status:"all"}
];

let currentTab="all";

function save(){
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

function renderJobs(){

  const container=document.getElementById("jobContainer");
  const empty=document.getElementById("emptyState");

  container.innerHTML="";

  const filtered=jobs.filter(j=>currentTab==="all"||j.status===currentTab);

  document.getElementById("tabCount").innerText=`${filtered.length} jobs`;

  if(filtered.length===0){
    empty.classList.remove("hidden");
  }else{
    empty.classList.add("hidden");
  }

  filtered.forEach(job=>{
    container.innerHTML+=`
      <div class="job-card">
        <h3>${job.title}</h3>
        <p>${job.company} • ${job.location}</p>
        <p>${job.salary}</p>

        ${job.status==="interview"?'<span class="badge i">Interview</span>':""}
        ${job.status==="rejected"?'<span class="badge r">Rejected</span>':""}

        <br>

        <button class="btn interview-btn" onclick="updateStatus(${job.id},'interview')">Interview</button>
        <button class="btn reject-btn" onclick="updateStatus(${job.id},'rejected')">Rejected</button>
        <button class="btn delete-btn" onclick="deleteJob(${job.id})">Delete</button>
      </div>
    `;
  });

  updateDashboard();
  save();
}

function updateStatus(id,status){
  const job=jobs.find(j=>j.id===id);
  job.status=job.status===status?"all":status;
  renderJobs();
}

function deleteJob(id){
  jobs=jobs.filter(j=>j.id!==id);
  renderJobs();
}

function updateDashboard(){
  document.getElementById("allCount").innerText=jobs.length;
  document.getElementById("interviewCount").innerText=jobs.filter(j=>j.status==="interview").length;
  document.getElementById("rejectedCount").innerText=jobs.filter(j=>j.status==="rejected").length;
}

function switchTab(tab,el){
  currentTab=tab;
  document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("active"));
  el.classList.add("active");
  renderJobs();
}

renderJobs();