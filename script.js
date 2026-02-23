let jobs = JSON.parse(localStorage.getItem("jobs")) || [
  {id:1, company:"MetaTech", role:"Frontend Developer", location:"Dhaka", salary:"40k-60k", status:"all"},
  {id:2, company:"DevHive", role:"Backend Engineer", location:"Remote", salary:"50k-70k", status:"all"},
  {id:3, company:"DataSoft", role:"Data Analyst", location:"Dhaka", salary:"45k-65k", status:"all"},
  {id:4, company:"CloudNet", role:"Cloud Engineer", location:"Singapore", salary:"80k-100k", status:"all"},
  {id:5, company:"Innova", role:"UI Designer", location:"Remote", salary:"30k-40k", status:"all"},
  {id:6, company:"CyberX", role:"Security Analyst", location:"Dhaka", salary:"60k-90k", status:"all"},
  {id:7, company:"Softvence", role:"React Developer", location:"Remote", salary:"55k-75k", status:"all"},
  {id:8, company:"NextGen", role:"QA Engineer", location:"Dhaka", salary:"35k-50k", status:"all"}
];

let currentTab="all";

function save(){
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

function renderJobs(){

  const container=document.getElementById("jobContainer");
  container.innerHTML="";

  const filtered=jobs.filter(j=>currentTab==="all"||j.status===currentTab);

  tabCount.innerText=`${filtered.length} jobs`;

  if(filtered.length===0){
    emptyState.classList.remove("hidden");
  }else{
    emptyState.classList.add("hidden");
  }

  filtered.forEach(job=>{
    container.innerHTML+=`
    <div class="job-card">
      <h3>${job.role}</h3>
      <p>${job.company} • ${job.location}</p>
      <p>${job.salary}</p>
      ${job.status==="interview"?'<span class="badge i">Interview</span>':""}
      ${job.status==="rejected"?'<span class="badge r">Rejected</span>':""}
      <br>
      <button class="btn interview-btn" onclick="updateStatus(${job.id},'interview')">Interview</button>
      <button class="btn reject-btn" onclick="updateStatus(${job.id},'rejected')">Rejected</button>
      <button class="btn delete-btn" onclick="deleteJob(${job.id})">Delete</button>
    </div>`;
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
  allCount.innerText=jobs.length;
  interviewCount.innerText=jobs.filter(j=>j.status==="interview").length;
  rejectedCount.innerText=jobs.filter(j=>j.status==="rejected").length;
}

function switchTab(tab,el){
  currentTab=tab;
  document.querySelectorAll(".tabs button").forEach(b=>b.classList.remove("active"));
  el.classList.add("active");
  renderJobs();
}

renderJobs();