import React from 'react'

export default function StepNumber() {
  return (
    <div className="d-flex">
      <div className="completed-circle paragraph2 text-medium">1</div>
      <div className="vcenter p-1">
        <div className="completed-line"></div>
      </div>
      <div className="semi-completed-circle paragraph2 text-medium">2</div>
      <div className="vcenter p-1">
        <div className="dotted-line"></div>
      </div>
      <div className="incompleted-circle paragraph2 text-medium">3</div>
      <div className="vcenter p-1">
        <div className="next-line"></div>
      </div>
      <div className="incompleted-circle paragraph2 text-medium">4</div>
    </div>
  )
}
