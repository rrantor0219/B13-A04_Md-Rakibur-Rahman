const jobs = [
  {id:1, company:"TechNova Solutions", position:"Frontend Developer", location:"Remote", type:"Full-time", salary:"$70k - $85k", description:"Build responsive interfaces using JavaScript.", status:"all"},
  {id:2, company:"DataSphere", position:"Junior Web Developer", location:"New York", type:"Full-time", salary:"$60k - $72k", description:"Maintain and update company website.", status:"all"},
  {id:3, company:"Creative Pixel", position:"UI Designer", location:"Remote", type:"Contract", salary:"$40/hr", description:"Design clean and modern layouts.", status:"all"},
  {id:4, company:"CloudCore", position:"JavaScript Developer", location:"Texas", type:"Full-time", salary:"$75k - $90k", description:"Improve frontend performance.", status:"all"},
  {id:5, company:"NextGen Soft", position:"Web Dev Intern", location:"California", type:"Internship", salary:"$20/hr", description:"Assist senior developers.", status:"all"},
  {id:6, company:"BrightTech", position:"Frontend Engineer", location:"Remote", type:"Full-time", salary:"$80k - $95k", description:"Create reusable components.", status:"all"},
  {id:7, company:"Innova Labs", position:"React Developer", location:"Florida", type:"Full-time", salary:"$78k - $88k", description:"Convert UI into real app.", status:"all"},
  {id:8, company:"CodeCraft Agency", position:"Website Maintenance", location:"Remote", type:"Part-time", salary:"$35/hr", description:"Fix bugs and update content.", status:"all"}
];

let currentTab = "all";

const jobList = document.getElementById("jobList");
const tabs = document.querySelectorAll(".tab");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");
const emptyState = document.getElementById("emptyState");

tabs.forEach(tab=>{
  tab.addEventListener("click", ()=>{
    tabs.forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    currentTab = tab.dataset.tab;
    filterJobs();
  });
});

function filterJobs(){
  let filtered = jobs;

  if(currentTab !== "all"){
    filtered = jobs.filter(job=>job.status === currentTab);
  }

  renderJobs(filtered);
}

function renderJobs(list){

  jobList.innerHTML = "";

  updateCounts();

  tabCount.textContent = list.length + " jobs";

  if(list.length === 0){
    emptyState.style.display = "block";
    return;
  }else{
    emptyState.style.display = "none";
  }

  list.forEach(job=>{

    const card = document.createElement("div");
    card.className = "job-card";
    card.dataset.id = job.id;

    let badge = "";
    if(job.status === "interview") badge = `<span class="badge interview">Interview</span>`;
    if(job.status === "rejected") badge = `<span class="badge rejected">Rejected</span>`;

    card.innerHTML = `
      ${badge}
      <h3>${job.position}</h3>
      <p><strong>${job.company}</strong></p>
      <p>${job.location}</p>
      <p>${job.type}</p>
      <p>${job.salary}</p>
      <p>${job.description}</p>

      <div class="btn-group">
        <button class="interview-btn">Interview</button>
        <button class="rejected-btn">Rejected</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    jobList.appendChild(card);

  });
}

function updateCounts(){

  totalCount.textContent = jobs.length;

  const interview = jobs.filter(j=>j.status==="interview").length;
  const rejected = jobs.filter(j=>j.status==="rejected").length;

  interviewCount.textContent = interview;
  rejectedCount.textContent = rejected;
}

jobList.addEventListener("click", e=>{

  const card = e.target.closest(".job-card");
  if(!card) return;

  const id = Number(card.dataset.id);
  const job = jobs.find(j=>j.id === id);

  if(e.target.classList.contains("interview-btn")){
    job.status = "interview";
  }

  if(e.target.classList.contains("rejected-btn")){
    job.status = "rejected";
  }

  if(e.target.classList.contains("delete-btn")){
    const index = jobs.findIndex(j=>j.id === id);
    jobs.splice(index,1);
  }

  filterJobs();
});

filterJobs();