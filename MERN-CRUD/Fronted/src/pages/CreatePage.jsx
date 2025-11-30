import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-300 animate-fade-in">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link
            to={"/"}
            className="btn btn-ghost mb-6 transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100 shadow-xl border border-base-300 rounded-2xl overflow-hidden animate-slide-up">
            <div className="card-body p-6 md:p-8">
              <h2 className="card-title text-3xl font-bold mb-6 text-center md:text-left">
                Create New Note
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered input-lg focus:input-primary transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg">
                      Content
                    </span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered textarea-lg h-40 focus:textarea-primary transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end pt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg transition-transform duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;
