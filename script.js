const steps = [
  {
    id: "step-1",
    label: "Step 1",
    title: "Boc-Glu(OBzl)-Ala-OBzl 的合成",
    equation: "Boc-Glu(OBzl) + H-Ala-OBzl·Tos → Boc-Glu(OBzl)-Ala-OBzl",
    product: { name: "Boc-Glu(OBzl)-Ala-OBzl", mw: 498.57 },
    rows: [
      { name: "Boc-Glu(OBzl)", role: "羧酸组分", mw: 337.37, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "HOBt", role: "缩合助剂", mw: 153.15, eq: "1.00", ratio: 1.0, note: "通常与羧酸组分等当量" },
      { name: "DCC", role: "活化剂", mw: 206.33, eq: "1.05-1.10", ratio: 1.05, note: "通常略过量" },
      { name: "H-Ala-OBzl·Tos", role: "胺组分", mw: 351.42, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "NMM", role: "有机碱", mw: 101.15, eq: "2.20-3.00", ratio: 2.2, note: "先中和对甲苯磺酸盐，再补少量过量碱" }
    ]
  },
  {
    id: "step-2",
    label: "Step 2",
    title: "Glu(OBzl)-Ala-OBzl·HCl 的合成",
    equation: "Boc-Glu(OBzl)-Ala-OBzl → Glu(OBzl)-Ala-OBzl·HCl",
    product: { name: "Glu(OBzl)-Ala-OBzl·HCl", mw: 434.91 },
    rows: [
      { name: "Boc-Glu(OBzl)-Ala-OBzl", role: "底物", mw: 498.57, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" }
    ]
  },
  {
    id: "step-3",
    label: "Step 3",
    title: "Boc-Gly-Glu(OBzl)-Ala-OBzl 的合成",
    equation: "Boc-Gly + Glu(OBzl)-Ala-OBzl·HCl → Boc-Gly-Glu(OBzl)-Ala-OBzl",
    product: { name: "Boc-Gly-Glu(OBzl)-Ala-OBzl", mw: 555.62 },
    rows: [
      { name: "Boc-Gly", role: "羧酸组分", mw: 175.18, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "HOBt", role: "缩合助剂", mw: 153.15, eq: "1.00", ratio: 1.0, note: "通常与羧酸组分等当量" },
      { name: "DCC", role: "活化剂", mw: 206.33, eq: "1.05-1.10", ratio: 1.05, note: "通常略过量" },
      { name: "Glu(OBzl)-Ala-OBzl·HCl", role: "胺组分", mw: 434.91, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "NMM", role: "有机碱", mw: 101.15, eq: "2.20-3.00", ratio: 2.2, note: "先中和胺盐，再补少量过量碱" }
    ]
  },
  {
    id: "step-4",
    label: "Step 4",
    title: "Gly-Glu(OBzl)-Ala-OBzl·HCl 的合成",
    equation: "Boc-Gly-Glu(OBzl)-Ala-OBzl → Gly-Glu(OBzl)-Ala-OBzl·HCl",
    product: { name: "Gly-Glu(OBzl)-Ala-OBzl·HCl", mw: 491.96 },
    rows: [
      { name: "Boc-Gly-Glu(OBzl)-Ala-OBzl", role: "底物", mw: 555.62, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" }
    ]
  },
  {
    id: "step-5",
    label: "Step 5",
    title: "Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl 的合成",
    equation: "Boc-Asp(OBzl) + Gly-Glu(OBzl)-Ala-OBzl·HCl → Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl",
    product: { name: "Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl", mw: 760.83 },
    rows: [
      { name: "Boc-Asp(OBzl)", role: "羧酸组分", mw: 323.34, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "HOBt", role: "缩合助剂", mw: 153.15, eq: "1.00", ratio: 1.0, note: "通常与羧酸组分等当量" },
      { name: "DCC", role: "活化剂", mw: 206.33, eq: "1.05-1.10", ratio: 1.05, note: "通常略过量" },
      { name: "Gly-Glu(OBzl)-Ala-OBzl·HCl", role: "胺组分", mw: 491.96, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" },
      { name: "NMM", role: "有机碱", mw: 101.15, eq: "2.20-3.00", ratio: 2.2, note: "先中和胺盐，再补少量过量碱" }
    ]
  },
  {
    id: "step-6",
    label: "Step 6",
    title: "Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl 的合成",
    equation: "Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl → Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl",
    product: { name: "Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl", mw: 697.17 },
    rows: [
      { name: "Boc-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl", role: "底物", mw: 760.83, eq: "1.00", ratio: 1.0, stoich: 1, note: "理论产量参与计算" }
    ]
  },
  {
    id: "step-7",
    label: "Step 7",
    title: "Boc-Glu(OBzl)-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl 的合成",
    equation: "Boc-Glu(OBzl) + Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl → Boc-Glu(OBzl)-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl",
    product: { name: "Boc-Glu(OBzl)-Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl", mw: 980.06 },
    rows: [
      { name: "Boc-Glu(OBzl)", role: "谷氨酸引入片段", mw: 337.37, eq: "1.00", ratio: 1.0, stoich: 1, note: "唯一游离羧基参与缩合；理论产量参与计算" },
      { name: "HOBt", role: "缩合助剂", mw: 153.15, eq: "1.00", ratio: 1.0, note: "对应一个游离羧基" },
      { name: "DCC", role: "活化剂", mw: 206.33, eq: "1.05-1.10", ratio: 1.05, note: "对应一个游离羧基" },
      { name: "Asp(OBzl)-Gly-Glu(OBzl)-Ala-OBzl·HCl", role: "四肽胺组分", mw: 697.17, eq: "1.00-1.10", ratio: 1.0, stoich: 1, note: "可将胺组分微量过量；理论产量参与计算" },
      { name: "NMM", role: "有机碱", mw: 101.15, eq: "2.20-3.00", ratio: 2.2, note: "先中和四肽盐酸盐，再补 0.2-0.5 eq" }
    ]
  }
];

const pickupMaterials = [
  { name: "Boc-Glu(OBzl)", mw: 337.37, eq: "2.00", ratio: 2.0, steps: ["Step 1", "Step 7"] },
  { name: "H-Ala-OBzl·Tos", mw: 351.42, eq: "1.00", ratio: 1.0, steps: ["Step 1"] },
  { name: "Boc-Gly", mw: 175.18, eq: "1.00", ratio: 1.0, steps: ["Step 3"] },
  { name: "Boc-Asp(OBzl)", mw: 323.34, eq: "1.00", ratio: 1.0, steps: ["Step 5"] }
];

const stepsContainer = document.querySelector("#steps");
const pickupBody = document.querySelector("#pickup-body");
const pickupStatus = document.querySelector("#pickup-status");
const stepTemplate = document.querySelector("#step-template");

function formatNumber(value, digits = 4) {
  if (!Number.isFinite(value)) {
    return "-";
  }
  const fixed = Number(value).toFixed(digits);
  return fixed.replace(/(\.\d*?[1-9])0+$|\.0+$/, "$1");
}

function parseValue(value) {
  if (value === "" || value == null) {
    return null;
  }
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function mmolFromMass(mass, mw) {
  return (mass / mw) * 1000;
}

function massFromMmol(mmol, mw) {
  return (mmol * mw) / 1000;
}

function setNumberInputs(rowEl, mw, mmol) {
  const massInput = rowEl.querySelector(".mass-input");
  const mmolInput = rowEl.querySelector(".mmol-input");

  if (mmol == null) {
    massInput.value = "";
    mmolInput.value = "";
    return;
  }

  mmolInput.value = formatNumber(mmol);
  massInput.value = formatNumber(massFromMmol(mmol, mw));
}

function setRowValues(rowEl, row, mmol) {
  setNumberInputs(rowEl, row.mw, mmol);
}

function inferStepFromRow(card, config, sourceIndex, sourceMmol) {
  const rows = [...card.querySelectorAll("tbody tr")];
  const source = config.rows[sourceIndex];
  const inferenceStatus = card.querySelector(".inference-status");

  if (sourceMmol == null || sourceMmol < 0) {
    inferenceStatus.textContent = "自动推算基准：-";
    return;
  }

  const baseScale = sourceMmol / source.ratio;
  config.rows.forEach((row, index) => {
    const inferredMmol = baseScale * row.ratio;
    setRowValues(rows[index], row, inferredMmol);
  });

  inferenceStatus.textContent = `自动推算基准：${source.name}，按 ${formatNumber(source.ratio, 2)} eq 推算整步投料`;
}

function calculateStep(card, config) {
  const rows = [...card.querySelectorAll("tbody tr")];
  const candidates = [];

  rows.forEach((rowEl, index) => {
    const row = config.rows[index];
    const mmol = parseValue(rowEl.querySelector(".mmol-input").value);
    if (row.stoich && mmol != null && mmol >= 0) {
      candidates.push({
        name: row.name,
        productMmol: mmol / row.stoich,
      });
    }
  });

  const theoreticalMassEl = card.querySelector(".theoretical-mass");
  const theoreticalMmolEl = card.querySelector(".theoretical-mmol");
  const actualMmolEl = card.querySelector(".actual-mmol");
  const yieldEl = card.querySelector(".yield-value");
  const limitingEl = card.querySelector(".limiting-note");
  const actualMass = parseValue(card.querySelector(".actual-mass-input").value);

  if (!candidates.length) {
    theoreticalMassEl.textContent = "-";
    theoreticalMmolEl.textContent = `产物 ${config.product.name}：- mmol`;
    actualMmolEl.textContent = "对应 mmol：-";
    yieldEl.textContent = "-";
    limitingEl.textContent = "限量底物：-";
    return;
  }

  const limiting = candidates.reduce((min, item) => item.productMmol < min.productMmol ? item : min);
  const theoreticalMmol = limiting.productMmol;
  const theoreticalMass = massFromMmol(theoreticalMmol, config.product.mw);

  theoreticalMassEl.textContent = `${formatNumber(theoreticalMass)} g`;
  theoreticalMmolEl.textContent = `产物 ${config.product.name}：${formatNumber(theoreticalMmol)} mmol`;
  limitingEl.textContent = `限量底物：${limiting.name}`;

  if (actualMass == null) {
    actualMmolEl.textContent = "对应 mmol：-";
    yieldEl.textContent = "-";
    return;
  }

  const actualMmol = mmolFromMass(actualMass, config.product.mw);
  const yieldValue = theoreticalMass > 0 ? (actualMass / theoreticalMass) * 100 : null;

  actualMmolEl.textContent = `对应 mmol：${formatNumber(actualMmol)}`;
  yieldEl.textContent = yieldValue == null ? "-" : `${formatNumber(yieldValue, 2)} %`;
}

function bindRowConversion(card, config) {
  const rows = [...card.querySelectorAll("tbody tr")];

  rows.forEach((rowEl, index) => {
    const row = config.rows[index];
    const massInput = rowEl.querySelector(".mass-input");
    const mmolInput = rowEl.querySelector(".mmol-input");

    massInput.addEventListener("input", () => {
      const mass = parseValue(massInput.value);
      const mmol = mass == null ? null : mmolFromMass(mass, row.mw);
      inferStepFromRow(card, config, index, mmol);
      calculateStep(card, config);
    });

    mmolInput.addEventListener("input", () => {
      const mmol = parseValue(mmolInput.value);
      inferStepFromRow(card, config, index, mmol);
      calculateStep(card, config);
    });
  });

  card.querySelector(".actual-mass-input").addEventListener("input", () => {
    calculateStep(card, config);
  });
}

function renderRow(row) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${row.name}</td>
    <td><span class="role-tag">${row.role}</span></td>
    <td class="mw-cell">${row.mw}</td>
    <td class="eq-cell">${row.eq}</td>
    <td>
      <input type="number" min="0" step="0.0001" class="mass-input" placeholder="输入质量">
    </td>
    <td>
      <input type="number" min="0" step="0.0001" class="mmol-input" placeholder="输入 mmol">
    </td>
    <td>${row.note ?? "-"}</td>
  `;
  return tr;
}

function renderPickupRow(material) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${material.name}</td>
    <td class="pickup-steps">${material.steps.join(" / ")}</td>
    <td class="mw-cell">${material.mw}</td>
    <td class="eq-cell">${material.eq}</td>
    <td>
      <input type="number" min="0" step="0.0001" class="mass-input" placeholder="输入质量">
    </td>
    <td>
      <input type="number" min="0" step="0.0001" class="mmol-input" placeholder="输入 mmol">
    </td>
  `;
  return tr;
}

function syncPickupTable(sourceIndex, sourceMmol) {
  const rows = [...pickupBody.querySelectorAll("tr")];
  const source = pickupMaterials[sourceIndex];

  if (sourceMmol == null || sourceMmol < 0) {
    rows.forEach((rowEl) => setNumberInputs(rowEl, 0, null));
    pickupStatus.textContent = "统一取料基准：-";
    return;
  }

  const baseScale = sourceMmol / source.ratio;

  pickupMaterials.forEach((material, index) => {
    setNumberInputs(rows[index], material.mw, baseScale * material.ratio);
  });

  pickupStatus.textContent = `统一取料基准：${source.name}，按 ${formatNumber(source.ratio, 2)} eq 反推整条路线原料`;
}

function bindPickupTable() {
  const rows = [...pickupBody.querySelectorAll("tr")];

  rows.forEach((rowEl, index) => {
    const material = pickupMaterials[index];
    const massInput = rowEl.querySelector(".mass-input");
    const mmolInput = rowEl.querySelector(".mmol-input");

    massInput.addEventListener("input", () => {
      const mass = parseValue(massInput.value);
      const mmol = mass == null ? null : mmolFromMass(mass, material.mw);
      syncPickupTable(index, mmol);
    });

    mmolInput.addEventListener("input", () => {
      const mmol = parseValue(mmolInput.value);
      syncPickupTable(index, mmol);
    });
  });
}

function renderStep(config) {
  const fragment = stepTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".step-card");
  card.id = config.id;
  card.querySelector(".step-label").textContent = config.label;
  card.querySelector(".step-title").textContent = config.title;
  card.querySelector(".step-equation").textContent = config.equation;

  const body = card.querySelector(".materials-body");
  config.rows.forEach((row) => {
    body.appendChild(renderRow(row));
  });

  bindRowConversion(card, config);
  calculateStep(card, config);
  return fragment;
}

pickupMaterials.forEach((material) => {
  pickupBody.appendChild(renderPickupRow(material));
});

bindPickupTable();

steps.forEach((step) => {
  stepsContainer.appendChild(renderStep(step));
});
