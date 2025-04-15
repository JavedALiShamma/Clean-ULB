import React, { useState } from "react";
import { Modal, Button as BsButton, Badge, Dropdown, DropdownButton, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const dummyComplaints = [
  {
    id: "CMP-001",
    name: "रमेश कुमार",
    area: "एमजी रोड",
    address: "123 एमजी रोड, जोन-1",
    zone: "उत्तर",
    complaint: "पिछले 3 दिनों से कूड़ा नहीं उठाया गया है।",
    category: "सफाई",
    wardNumber: "वार्ड 12",
    status: "Pending",
    timestamp: "2025-04-10T09:30:00",
    location: { lat: 28.6139, lng: 77.209 },
    reply: "इस मुद्दे पर कार्य चल रहा है और जल्द ही समाधान किया जाएगा।",
    imageUrl: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-q5rt4lmop9cckreusrkdbjbqt3-20210316101036.Medi.jpeg"
  },
  {
    id: "CMP-002",
    name: "अनिता शर्मा",
    area: "लक्ष्मी नगर",
    address: "45 लक्ष्मी नगर, जोन-3",
    zone: "पूर्व",
    complaint: "सड़क की लाइट्स काम नहीं कर रही हैं।",
    category: "बिजली",
    wardNumber: "वार्ड 5",
    status: "Resolved",
    timestamp: "2025-04-08T19:45:00",
    location: { lat: 28.620, lng: 77.290 },
    reply: "लाइट्स 9 अप्रैल को ठीक कर दी गई थीं।",
    imageUrl: "https://citizen.complainthub.org/uploads/default/fbc901fad7060aaf102d86bc185aeb229cba7724"
  },
  {
    id: "CMP-003",
    name: "मोहम्मद फैज़ान",
    area: "इंदिरा कॉलोनी",
    address: "89 इंदिरा कॉलोनी, जोन-5",
    zone: "पश्चिम",
    complaint: "घर के सामने सीवर ओवरफ्लो हो रहा है।",
    category: "पानी और सीवर",
    wardNumber: "वार्ड 7",
    status: "Pending",
    timestamp: "2025-04-11T14:20:00",
    location: { lat: 28.650, lng: 77.180 },
    reply: "रखरखाव टीम को सूचित कर दिया गया है।",
    imageUrl: "https://via.placeholder.com/600x300?text=Sewage+Overflow"
  },
  {
    id: "CMP-004",
    name: "प्रीति जोशी",
    area: "सिविल लाइंस",
    address: "77 सिविल लाइंस, जोन-2",
    zone: "दक्षिण",
    complaint: "फुटपाथ टूटा हुआ है जिससे पैदल यात्रियों को परेशानी हो रही है।",
    category: "सड़क और निर्माण",
    wardNumber: "वार्ड 3",
    status: "In Progress",
    timestamp: "2025-04-09T16:00:00",
    location: { lat: 28.640, lng: 77.200 },
    reply: "मरम्मत का कार्य प्रगति पर है।",
    imageUrl: "https://via.placeholder.com/600x300?text=Broken+Footpath"
  },
];

export default function GrievanceDashboard() {
  const [filter, setFilter] = useState("All");
  const [complaints, setComplaints] = useState(dummyComplaints);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [assignedTo, setAssignedTo] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [replyImage, setReplyImage] = useState(null);

  const handleStatusChange = (id, newStatus) => {
    const updated = complaints.map((c) =>
      c.id === id ? { ...c, status: newStatus } : c
    );
    setComplaints(updated);
  };

  const handleCardClick = (complaint) => {
    setSelectedComplaint(complaint);
    setShowModal(true);
  };

  const handleReplySubmit = () => {
    alert(`उत्तर भेजा गया: ${replyMessage}\nछवि: ${replyImage ? replyImage.name : 'कोई नहीं'}`);
    setReplyMessage("");
    setReplyImage(null);
  };

  const filteredComplaints =
    filter === "All" ? complaints : complaints.filter((c) => c.status === filter);

  return (
    <div className="container py-4">
      <h1 className="mb-4">नगर निकाय शिकायत निवारण</h1>
      <div className="mb-3">
        <div className="btn-group">
          {['All', 'Pending', 'In Progress', 'Resolved'].map(status => (
            <button
              key={status}
              className={`btn btn-${filter === status ? 'primary' : 'outline-primary'}`}
              onClick={() => setFilter(status)}
            >
              {status === 'All' ? 'सभी' : status === 'Pending' ? 'लंबित' : status === 'In Progress' ? 'प्रगति पर' : 'सुलझाया गया'}
            </button>
          ))}
        </div>
      </div>
      <div className="row">
        {filteredComplaints.map((c) => (
          <div className="col-md-6 mb-4" key={c.id}>
            <div className="card shadow-sm" onClick={() => handleCardClick(c)} style={{ cursor: 'pointer' }}>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-1">{c.name} ({c.area})</h5>
                  <Badge bg={
                    c.status === "Resolved" ? "success" :
                    c.status === "In Progress" ? "secondary" : "danger"
                  }>{c.status === "Resolved" ? 'सुलझाया गया' : c.status === "In Progress" ? 'प्रगति पर' : 'लंबित'}</Badge>
                </div>
                <p className="card-text small text-muted mb-1">{new Date(c.timestamp).toLocaleString()}</p>
                <p className="card-text">{c.complaint}</p>
                <p className="card-text"><strong>श्रेणी:</strong> {c.category}</p>
                <p className="card-text"><strong>वार्ड:</strong> {c.wardNumber}</p>
                <p className="card-text"><strong>जोन:</strong> {c.zone}</p>
                <p className="card-text"><strong>शिकायत ID:</strong> {c.id}</p>
                <div>
                  {c.status !== "Resolved" && (
                    <BsButton
                      variant="outline-success"
                      size="sm"
                      onClick={(e) => { e.stopPropagation(); handleStatusChange(c.id, "Resolved"); }}
                    >
                      सुलझाया गया चिह्नित करें
                    </BsButton>
                  )}
                  {c.status === "Pending" && (
                    <BsButton
                      variant="outline-secondary"
                      size="sm"
                      className="ms-2"
                      onClick={(e) => { e.stopPropagation(); handleStatusChange(c.id, "In Progress"); }}
                    >
                      कार्य शुरू करें
                    </BsButton>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        {selectedComplaint && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>शिकायत विवरण</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p><strong>शिकायत ID:</strong> {selectedComplaint.id}</p>
              <p><strong>नाम:</strong> {selectedComplaint.name}</p>
              <p><strong>क्षेत्र:</strong> {selectedComplaint.area}</p>
              <p><strong>पता:</strong> {selectedComplaint.address}</p>
              <p><strong>वार्ड:</strong> {selectedComplaint.wardNumber}</p>
              <p><strong>जोन:</strong> {selectedComplaint.zone}</p>
              <p><strong>समय:</strong> {new Date(selectedComplaint.timestamp).toLocaleString()}</p>
              <p><strong>श्रेणी:</strong> {selectedComplaint.category}</p>
              <p><strong>शिकायत:</strong> {selectedComplaint.complaint}</p>
              <img style={{width:"330px", height:"300px"}} src={selectedComplaint.imageUrl} alt="Complaint" className="img-fluid rounded mb-3" />
              <div className="mb-3">
                <iframe
                  title="map"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=${selectedComplaint.location.lat},${selectedComplaint.location.lng}&z=15&output=embed`}
                ></iframe>
                <p className="mt-2"><strong>स्थान:</strong> {selectedComplaint.address}</p>
              </div>
              <p><strong>उत्तर:</strong> {selectedComplaint.reply}</p>
              <div className="mt-3">
                <strong>शिकायत अग्रेषित करें:</strong>{" "}
                <DropdownButton
                  id="dropdown-basic-button"
                  title={assignedTo || "अधिकारी चुनें"}
                  onSelect={(value) => setAssignedTo(value)}
                >
                  <Dropdown.Item eventKey="SI">SI को भेजें</Dropdown.Item>
                  <Dropdown.Item eventKey="Jamdar">Jamdar को भेजें</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="mt-4">
                <h5>उत्तर भेजें</h5>
                <Form.Group className="mb-2">
                  <Form.Label>संदेश</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={2}
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>छवि संलग्न करें</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setReplyImage(e.target.files[0])}
                  />
                </Form.Group>
                <BsButton variant="primary" onClick={handleReplySubmit}>उत्तर भेजें</BsButton>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <BsButton variant="secondary" onClick={() => setShowModal(false)}>
                बंद करें
              </BsButton>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}
