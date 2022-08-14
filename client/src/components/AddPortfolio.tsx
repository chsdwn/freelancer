import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { IPortfolio } from '@/types';
import {
  createPortfolio,
  deletePortfolio,
  getPortfolio,
  updatePortfolio,
} from '@/api';
import { Input, Loading } from '.';

type IForm = {
  [key in keyof Omit<IPortfolio, '_id'>]: {
    value: string;
    label: string;
    touched: boolean;
  };
};

export const AddPortfolio = () => {
  const navigate = useNavigate();
  const { id = '' } = useParams();

  const [disabled, setDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [portfolio, setPortfolio] = useState<IPortfolio>();

  useEffect(() => {
    if (!id) return;
    const getPortfolioAsync = async () => {
      setLoading(true);
      const portfolioData = await getPortfolio(id);
      setLoading(false);
      setPortfolio(portfolioData);
    };
    getPortfolioAsync();
  }, [id]);

  const [form, setForm] = useState<IForm>({
    projectName: {
      value: portfolio?.projectName || '',
      label: 'Project name',
      touched: false,
    },
    title: {
      value: portfolio?.title || '',
      label: 'Title',
      touched: false,
    },
    description: {
      value: portfolio?.description || '',
      label: 'Description',
      touched: false,
    },
    imageUrl: {
      value: portfolio?.imageUrl || '',
      label: 'Image Url',
      touched: false,
    },
    client: {
      value: portfolio?.client || '',
      label: 'Client',
      touched: false,
    },
    category: {
      value: portfolio?.category || '',
      label: 'Category',
      touched: false,
    },
  });

  useEffect(() => {
    if (loading) return setDisabled(true);

    const values = Object.values(form);
    const hasEmptyField = values.some(
      ({ value, touched }) => !value && touched,
    );
    const hasUntouchedEmptyField = values.some(
      ({ value, touched }) => !value && !touched,
    );
    setDisabled((isSubmitted && hasUntouchedEmptyField) || hasEmptyField);
  }, [form, loading, isSubmitted]);

  const handleFormFieldValueChange = (key: string, value: string) => {
    const formKey = key as keyof typeof form;
    setForm((prev) => {
      return {
        ...prev,
        [formKey]: {
          ...prev[formKey],
          value,
        },
      };
    });
  };

  useEffect(() => {
    if (!portfolio) return;

    Object.entries(portfolio).forEach(([key, value]) => {
      if (!(key in form)) return;
      handleFormFieldValueChange(key, value);
    });
  }, [portfolio]);

  const handleFormFieldTouched = (key: string) => {
    const formKey = key as keyof typeof form;
    setForm((prev) => ({
      ...prev,
      [formKey]: {
        ...prev[formKey],
        touched: true,
      },
    }));
  };

  const handleDelete = async () => {
    setLoading(true);
    await deletePortfolio(id);
    navigate('/', { replace: true });
  };

  const handleSave = async () => {
    if (loading || disabled) return;

    setIsSubmitted(true);
    setLoading(true);

    const body = Object.entries(form).reduce(
      (prev, [key, { value }]) => ({ ...prev, [key]: value }),
      {},
    ) as Omit<IPortfolio, '_id'>;

    if (id) {
      await updatePortfolio(id, body);
    } else {
      await createPortfolio(body);
    }

    navigate('/', { replace: true });
  };

  return (
    <div className="row justify-content-center p-4">
      <h1 className="text-center">{id ? 'Edit' : 'Add'} Portfolio</h1>
      <div className="col-lg-8 col-xl-7">
        {Object.entries(form).map(([key, { value, label, touched }]) => (
          <Input
            id={`add-portfolio-input-${key}`}
            key={key}
            value={value}
            label={label}
            placeholder={`Enter ${label.toLowerCase()}...`}
            errorMessage={`${label} required.`}
            showError={(touched || isSubmitted) && !value}
            onBlur={() => handleFormFieldTouched(key)}
            onChange={(newValue) => {
              handleFormFieldValueChange(key, newValue);
            }}
          />
        ))}
        <div className="float-end">
          <button
            className="btn btn-danger btn-xl me-2"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading && <Loading />}
            {!loading && 'Delete'}
          </button>
          <button
            className={`btn btn-primary btn-xl${disabled ? ' disabled' : ''}`}
            onClick={handleSave}
            disabled={disabled}
          >
            {loading && <Loading />}
            {!loading && (id ? 'Update' : 'Save')}
          </button>
        </div>
      </div>
    </div>
  );
};
