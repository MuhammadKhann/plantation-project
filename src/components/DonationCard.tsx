import React from 'react';
import { MapPin, Clock, Leaf } from 'lucide-react';

export interface DonationCardProps {
  id: string;
  title: string;
  plantType: string;
  description: string;
  imageUrl: string;
  location: string;
  status: 'AVAILABLE' | 'PENDING' | 'CLAIMED';
  createdAt: string;
}

export function DonationCard({
  title,
  plantType,
  description,
  imageUrl,
  location,
  status,
  createdAt,
}: DonationCardProps) {
  const statusColors = {
    AVAILABLE: 'bg-green-100 text-green-800 border-green-200',
    PENDING: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    CLAIMED: 'bg-gray-100 text-gray-800 border-gray-200',
  };

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="group flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
      <div className="relative h-48 w-full shrink-0 overflow-hidden bg-neutral-100">
        <img
          src={imageUrl || 'https://images.unsplash.com/photo-1416879598555-33e4562c9d64?q=80&w=600&auto=format&fit=crop'}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border shadow-sm ${
              statusColors[status]
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-emerald-600">
          <Leaf className="h-3.5 w-3.5" />
          <span>{plantType}</span>
        </div>
        
        <h3 className="mb-1 text-lg font-semibold text-neutral-900 line-clamp-1">
          {title}
        </h3>
        
        <p className="mb-4 text-sm text-neutral-600 line-clamp-2">
          {description}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-neutral-400" />
            <span className="truncate max-w-[120px]">{location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-neutral-400" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
